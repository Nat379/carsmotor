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
        card.classList.add('swiper');
        card.innerHTML = `
        <div class="swiper-wrapper">
          <div class="card-img swiper-slide">
              <img class="car-img" src=${car["card-img-1"]}>
          </div>
          <div class="card-img swiper-slide">
              <img class="car-img" src=${car["card-img-2"]}>
          </div>
          <div class="card-img swiper-slide">
              <img class="car-img" src=${car["card-img-3"]}>
          </div>
          <div class="card-img swiper-slide">
              <img class="car-img" src=${car["card-img-4"]}>
          </div>
          <div class="card-img swiper-slide">
              <img class="car-img" src=${car["card-img-5"]}>
          </div>
          <div class="card-img swiper-slide">
             <img class="car-img" src=${car["card-img-6"]}>
          </div>
          </div>
          <div class="swiper-button-prev"></div>
           <div class="swiper-button-next"></div>
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
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
  spaceBetween: 20,
  
  height: 300,
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