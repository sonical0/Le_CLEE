/* Authentication Module */
const AuthModule = (() => {
    const init = () => {
        initLoginForm();
        initRegisterForm();
    };

    const initLoginForm = () => {
        const loginForm = document.getElementById('loginForm');
        if (!loginForm) return;

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(loginForm);
            const email = formData.get('email');
            const password = formData.get('password');
            const remember = formData.get('remember');

            console.log('Login attempt:', { email, remember: !!remember });
            
            simulateLogin(email, password);
        });
    };

    const initRegisterForm = () => {
        const registerForm = document.getElementById('registerForm');
        if (!registerForm) return;

        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(registerForm);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const userType = formData.get('userType');
            const password = formData.get('password');
            const confirmPassword = formData.get('confirmPassword');
            const terms = formData.get('terms');

            if (!validatePassword(password)) {
                showError('Le mot de passe doit contenir au moins 8 caractères');
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

            console.log('Registration attempt:', { firstName, lastName, email, userType });
            
            simulateRegister(firstName, lastName, email, userType);
        });

        confirmPasswordInput.addEventListener('input', () => {
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            
            if (confirmPassword && password !== confirmPassword) {
                confirmPasswordInput.setCustomValidity('Les mots de passe ne correspondent pas');
            } else {
                confirmPasswordInput.setCustomValidity('');
            }
        });
    };

    const validatePassword = (password) => {
        return password && password.length >= 8;
    };

    const showError = (message) => {
        alert(message);
    };

    const showSuccess = (message) => {
        alert(message);
    };

    const simulateLogin = (email, password) => {
        setTimeout(() => {
            console.log('Connexion fictive réussie pour:', email);
            showSuccess('Connexion réussie ! Redirection vers votre espace...');
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }, 1000);
    };

    const simulateRegister = (firstName, lastName, email, userType) => {
        setTimeout(() => {
            console.log('Inscription fictive réussie pour:', firstName, lastName);
            showSuccess('Inscription réussie ! Redirection vers la page de connexion...');
            
            setTimeout(() => {
                window.location.href = 'connexion.html';
            }, 1500);
        }, 1000);
    };

    return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
    AuthModule.init();
});
