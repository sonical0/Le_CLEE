/* ========================================
   CONTACT PAGE - JAVASCRIPT
======================================== */

// Contact Form Handler
const ContactFormModule = (() => {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');
  const errorMessage = document.getElementById('formError');
  
  const init = () => {
    if (!form) return;
    
    form.addEventListener('submit', handleSubmit);
    
    // Add input validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });
  };
  
  const validateField = (field) => {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    
    if (isRequired && !value) {
      field.classList.add('error');
      return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        field.classList.add('error');
        return false;
      }
    }
    
    // Phone validation (optional but validate format if provided)
    if (field.type === 'tel' && value) {
      const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        field.classList.add('error');
        return false;
      }
    }
    
    field.classList.remove('error');
    return true;
  };
  
  const validateForm = () => {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      showError('Veuillez corriger les erreurs dans le formulaire.');
      return;
    }
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate API call
    submitForm(data);
  };
  
  const submitForm = (data) => {
    // Show loading state
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.querySelector('.btn-text').textContent;
    submitBtn.querySelector('.btn-text').textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    // Simulate API call (replace with real API endpoint)
    setTimeout(() => {
      console.log('Form data:', data);
      
      // Show success message
      showSuccess();
      
      // Reset form
      form.reset();
      
      // Reset button
      submitBtn.querySelector('.btn-text').textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  };
  
  const showSuccess = () => {
    form.style.display = 'none';
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Scroll to message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Reset after 5 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
      form.style.display = 'flex';
    }, 5000);
  };
  
  const showError = (message) => {
    if (message) {
      errorMessage.querySelector('.message-text').textContent = message;
    }
    
    form.style.display = 'none';
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
    
    // Scroll to message
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Show form again after 3 seconds
    setTimeout(() => {
      errorMessage.style.display = 'none';
      form.style.display = 'flex';
    }, 3000);
  };
  
  return { init };
})();

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  ContactFormModule.init();
});
