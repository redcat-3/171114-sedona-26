let headerNav = document.querySelector('.header-nav__wrapper');
let navToggle = document.querySelector('.header-nav__toggle');

headerNav.classList.add('header-nav__wrapper--closed');
if (headerNav.classList.contains('header-nav__wrapper--closed')) {
  navToggle.classList.remove('header-nav__toggle--open');
} else {
  navToggle.classList.add('header-nav__toggle--open');
}

navToggle.addEventListener('click', function () {
  if (headerNav.classList.contains('header-nav__wrapper--closed')) {
    headerNav.classList.remove('header-nav__wrapper--closed');
    navToggle.classList.add('header-nav__toggle--open');
  } else {
    headerNav.classList.add('header-nav__wrapper--closed');
    navToggle.classList.remove('header-nav__toggle--open');
  }
});
