// burger-menu
const burgerMenu = document.querySelector('.burger-menu');
const openBurgerMenu = document.querySelector('.open-burger-menu');
const menuLinks = document.querySelectorAll('.nav-link');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  openBurgerMenu.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    openBurgerMenu.classList.remove('active');
  });
});

// Додати прослуховувач подій на документ
document.addEventListener('click', (event) => {
  // Перевірка, чи клік відбувся поза бургер-меню та ліній бургера
  const isClickInsideBurgerMenu = burgerMenu.contains(event.target);
  const isClickInsideOpenBurgerMenu = openBurgerMenu.contains(event.target);
  if (!isClickInsideBurgerMenu && !isClickInsideOpenBurgerMenu) {
    // Закрити бургер-меню та зняти активний клас з ліній бургера
    burgerMenu.classList.remove('active');
    openBurgerMenu.classList.remove('active');
  }
});