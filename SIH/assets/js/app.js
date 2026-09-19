/* 
   NIRMAAN AI - Main Application Bootstrapper
*/

document.addEventListener('DOMContentLoaded', () => {
  // Login Form Submission -> Navigates to Dashboard Overview (Screen 2)
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.NIRMAAN_ROUTER.navigateTo('view-dashboard');
    });
  }

  // Sidebar Navigation Click Handlers
  const navItems = document.querySelectorAll('.app-sidebar .nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.getAttribute('data-view');
      if (targetView) {
        window.NIRMAAN_ROUTER.navigateTo(targetView);
      }
    });
  });

  // Password eye toggles
  document.querySelectorAll('.input-icon-right').forEach(icon => {
    icon.addEventListener('click', () => {
      const input = icon.previousElementSibling;
      if (input && (input.type === 'password' || input.type === 'text')) {
        input.type = input.type === 'password' ? 'text' : 'password';
        icon.classList.toggle('fa-eye-slash');
      }
    });
  });

  // Initial Router boot
  window.NIRMAAN_ROUTER.navigateTo('view-login');
});
