/* 
   NIRMAAN AI - Dedicated Login Page Logic
*/

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const eyeBtn = document.getElementById('toggle-password-eye');
  const pwdInput = document.getElementById('login-password');

  // Password Visibility Toggle
  if (eyeBtn && pwdInput) {
    eyeBtn.addEventListener('click', () => {
      if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        eyeBtn.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        pwdInput.type = 'password';
        eyeBtn.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  }

  // Form Submission -> Navigates to dashboard.html
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Redirect to Dashboard Overview Page
      window.location.href = 'dashboard.html';
    });
  }
});
