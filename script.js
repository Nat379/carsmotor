// burger-menu
const burgerMenu = document.querySelector('.burger-menu');
const openBurgerMenu = document.querySelector('.open-burger-menu');
const menuLinks = document.querySelectorAll('.nav-link');

burgerMenu.addEventListener('click', () => {
  toggleMenu();
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});

// Додати прослуховувач подій на документ
document.addEventListener('click', (event) => {
  const isClickInsideBurgerMenu = burgerMenu.contains(event.target);
  const isClickInsideOpenBurgerMenu = openBurgerMenu.contains(event.target);
  if (!isClickInsideBurgerMenu && !isClickInsideOpenBurgerMenu) {
    // Закрити бургер-меню
    closeMenu();
  }
});

function toggleMenu() {
  burgerMenu.classList.toggle('active');
  openBurgerMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

function closeMenu() {
  burgerMenu.classList.remove('active');
  openBurgerMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}