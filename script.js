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

const availableCars = document.getElementById('sale');
const orderCars = document.getElementById('order');
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
      });
    })
    .catch(error => {
      console.error('Помилка завантаження', error);
    });
}


// active tabs

document.addEventListener('DOMContentLoaded', () => {
  loadCardsByCategory('available');
});

availableCars.addEventListener('click', () => {
  loadCardsByCategory('available');
});

orderCars.addEventListener('click', () => {
  loadCardsByCategory('order');
  
  const tabContainer = document.querySelector('.tab-container');

  if (tabContainer) {
    tabContainer.addEventListener('click', (event) => {
      const clickedTab = event.target.closest('.tab');
      if (!clickedTab || clickedTab.classList.contains('active-tab')) return;

      const tabs = tabContainer.querySelectorAll('.tab');
      tabs.forEach(tab => {
        tab.classList.remove('active-tab');
      });
      clickedTab.classList.add('active-tab');
    });
  };
});
document.querySelectorAll('.open-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const category = link.getAttribute('id').substring(0, link.getAttribute('id').indexOf('-'));
    loadCardsByCategory(category);
  });
});