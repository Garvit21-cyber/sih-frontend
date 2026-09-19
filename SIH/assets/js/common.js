/* 
   NIRMAAN AI - Common Page Helper & Navigation Manager
*/

document.addEventListener('DOMContentLoaded', () => {
  // Highlight active page in sidebar navigation
  const currentPath = window.location.pathname.split('/').pop() || 'login.html';
  
  const navLinks = document.querySelectorAll('.app-sidebar .nav-item');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'dashboard.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // User Profile click navigates to settings.html
  document.getElementById('profile-dropdown-btn')?.addEventListener('click', () => {
    window.location.href = 'settings.html';
  });
});
