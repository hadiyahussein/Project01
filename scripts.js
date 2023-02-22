const navbar = document.querySelector('.navbar');
const menuIcon = navbar.querySelector('.fa-bars');
const hiddenNavItems = navbar.querySelectorAll('.hidden-nav');

menuIcon.addEventListener('click', function() {
  for (let i = 0; i < hiddenNavItems.length; i++) {
    if (hiddenNavItems[i].classList.contains('show')) {
      hiddenNavItems[i].classList.remove('show');
    } else {
      hiddenNavItems[i].classList.add('show');
    }
  }
});