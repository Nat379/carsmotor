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

document.addEventListener('click', (event) => {
  const isClickInsideBurgerMenu = burgerMenu.contains(event.target);
  const isClickInsideOpenBurgerMenu = openBurgerMenu.contains(event.target);
  if (!isClickInsideBurgerMenu && !isClickInsideOpenBurgerMenu) {

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

// upload cards with info about cars
const cardsContainer = document.querySelector('.cards-container');

function loadCardsByCategory(category) {
  fetch('./cars.json')
    .then(response => response.json())
    .then(data => {
      const cars = data.filter(car => car.category === category);

      cardsContainer.innerHTML = ''; // Clear previous cards

      cars.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="card-img">
            <img class="car-img" src=${car["card-img"]}>
        </div>
        <h2 class="card-title">${car["card-title"]}</h2>
        <p class="card-price">${car["card-price"]}</p>
        <div class="card-description">
            <p>${car["distance"]}</p>
            <p>${car["battery"]}</p>
            <p>${car["year"]}</p>
        </div>
        `;
        cardsContainer.appendChild(card);
        card.addEventListener('click', openModalWithData);
      });
    })
    .catch(error => {
      console.error('Error loading products:', error);
    });
}

function openModalWithData() {
  
}

loadCardsByCategory("available");