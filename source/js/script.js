let headerNav = document.querySelector('.header-nav__wrapper');
let navToggle = document.querySelector('.header-nav__toggle');

headerNav.classList.add('header-nav__wrapper--closed');
if (headerNav.classList.contains('header-nav__wrapper--closed')) {
  navToggle.classList.add('header-nav__toggle--burger');
} else {
  navToggle.classList.remove('header-nav__toggle--burger');
}

navToggle.addEventListener('click', function () {
  if (headerNav.classList.contains('header-nav__wrapper--closed')) {
    headerNav.classList.remove('header-nav__wrapper--closed');
    navToggle.classList.remove('header-nav__toggle--burger');
  } else {
    headerNav.classList.add('header-nav__wrapper--closed');
    navToggle.classList.add('header-nav__toggle--burger');
  }
});
