/* Authentication Module */
const AuthModule = (() => {
    const USERS_STORAGE_KEY = 'clee_users';
    const SESSION_KEY = 'clee_session';
    const USERS_JSON_PATH = '../assets/data/users.json';

    const init = () => {
        loadInitialUsers();
        initLoginForm();
        initRegisterForm();
        checkSession();
    };

    const loadInitialUsers = async () => {
        const existingUsers = localStorage.getItem(USERS_STORAGE_KEY);
        
        if (!existingUsers) {
            try {
                const response = await fetch(USERS_JSON_PATH);
                if (response.ok) {
                    const data = await response.json();
                    if (data.users && data.users.length > 0) {
                        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(data.users));
                        console.log('Users loaded from JSON:', data.users.length);
                    }
                }
            } catch (error) {
                console.log('No initial users file found, starting fresh');
                localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([]));
            }
        }
    };

    const getAllUsers = () => {
        const users = localStorage.getItem(USERS_STORAGE_KEY);
        return users ? JSON.parse(users) : [];
    };

    const saveUsers = (users) => {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    };

    const generateUserId = () => {
        return 'user-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    };

    const hashPassword = (password) => {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(36);
    };

    const createSession = (user, remember = false) => {
        const session = {
            userId: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userType: user.userType,
            loginTime: new Date().toISOString(),
            remember: remember
        };
        
        if (remember) {
            localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        } else {
            sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
        }
        
        return session;
    };

    const getSession = () => {
        const localSession = localStorage.getItem(SESSION_KEY);
        const sessionSession = sessionStorage.getItem(SESSION_KEY);
        
        if (localSession) return JSON.parse(localSession);
        if (sessionSession) return JSON.parse(sessionSession);
        
        return null;
    };

    const checkSession = () => {
        const session = getSession();
        const currentPage = window.location.pathname;
        
        if (session && (currentPage.includes('connexion.html') || currentPage.includes('inscription.html'))) {
            console.log('User already logged in, redirecting to dashboard');
            window.location.href = 'dashboard.html';
        }
    };

    const logout = () => {
        localStorage.removeItem(SESSION_KEY);
        sessionStorage.removeItem(SESSION_KEY);
        window.location.href = 'connexion.html';
    };

    const initLoginForm = () => {
        const loginForm = document.getElementById('loginForm');
        if (!loginForm) return;

        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(loginForm);
            const email = formData.get('email').trim().toLowerCase();
            const password = formData.get('password');
            const remember = formData.get('remember');

            const users = getAllUsers();
            const user = users.find(u => u.email.toLowerCase() === email);

            if (!user) {
                showError('Aucun compte trouvé avec cet e-mail');
                return;
            }

            if (!user.active) {
                showError('Ce compte a été désactivé');
                return;
            }

            const passwordHash = hashPassword(password);
            if (user.password !== password && user.passwordHash !== passwordHash) {
                if (!user.passwordHash) {
                    user.passwordHash = hashPassword(user.password);
                    saveUsers(users);
                }
                
                if (user.passwordHash !== passwordHash) {
                    showError('Mot de passe incorrect');
                    return;
                }
            }

            createSession(user, !!remember);
            showSuccess('Connexion réussie ! Redirection vers votre espace...');
            
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
        });
    };

    const initRegisterForm = () => {
        const registerForm = document.getElementById('registerForm');
        if (!registerForm) return;

        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(registerForm);
            const firstName = formData.get('firstName').trim();
            const lastName = formData.get('lastName').trim();
            const email = formData.get('email').trim().toLowerCase();
            const userType = formData.get('userType');
            const password = formData.get('password');
            const confirmPassword = formData.get('confirmPassword');
            const terms = formData.get('terms');

            if (!firstName || !lastName) {
                showError('Veuillez renseigner votre nom et prénom');
                return;
            }

            if (!validateEmail(email)) {
                showError('Adresse e-mail invalide');
                return;
            }

            const users = getAllUsers();
            
            if (users.find(u => u.email.toLowerCase() === email)) {
                showError('Un compte existe déjà avec cet e-mail');
                return;
            }

            if (!validatePassword(password)) {
                showError('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre');
                return;
            }

            if (password !== confirmPassword) {
                showError('Les mots de passe ne correspondent pas');
                confirmPasswordInput.focus();
                return;
            }

            if (!terms) {
                showError('Vous devez accepter les conditions d\'utilisation');
                return;
            }

            const newUser = {
                id: generateUserId(),
                email: email,
                passwordHash: hashPassword(password),
                firstName: firstName,
                lastName: lastName,
                userType: userType || 'etablissement',
                createdAt: new Date().toISOString(),
                active: true
            };

            users.push(newUser);
            saveUsers(users);

            console.log('New user registered:', newUser.email);
            showSuccess('Inscription réussie ! Redirection vers la page de connexion...');
            
            setTimeout(() => {
                window.location.href = 'connexion.html';
            }, 1500);
        });

        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', () => {
                const password = passwordInput.value;
                const confirmPassword = confirmPasswordInput.value;
                
                if (confirmPassword && password !== confirmPassword) {
                    confirmPasswordInput.setCustomValidity('Les mots de passe ne correspondent pas');
                } else {
                    confirmPasswordInput.setCustomValidity('');
                }
            });
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        if (!password || password.length < 8) return false;
        
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        
        return hasUpperCase && hasLowerCase && hasNumber;
    };

    const showError = (message) => {
        const existingAlert = document.querySelector('.auth-alert');
        if (existingAlert) existingAlert.remove();

        const alert = document.createElement('div');
        alert.className = 'auth-alert auth-alert-error';
        alert.textContent = message;
        
        const authCard = document.querySelector('.auth-card');
        if (authCard) {
            authCard.insertBefore(alert, authCard.firstChild);
            
            setTimeout(() => {
                alert.classList.add('auth-alert-show');
            }, 10);
            
            setTimeout(() => {
                alert.classList.remove('auth-alert-show');
                setTimeout(() => alert.remove(), 300);
            }, 5000);
        } else {
            alert(message);
        }
    };

    const showSuccess = (message) => {
        const existingAlert = document.querySelector('.auth-alert');
        if (existingAlert) existingAlert.remove();

        const alert = document.createElement('div');
        alert.className = 'auth-alert auth-alert-success';
        alert.textContent = message;
        
        const authCard = document.querySelector('.auth-card');
        if (authCard) {
            authCard.insertBefore(alert, authCard.firstChild);
            
            setTimeout(() => {
                alert.classList.add('auth-alert-show');
            }, 10);
        } else {
            alert(message);
        }
    };

    return { 
        init,
        getSession,
        logout,
        getAllUsers
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    AuthModule.init();
});
