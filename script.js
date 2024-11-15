const carousel = document.querySelector('.carousel-wrapper');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function openMenu() {
  let menu = document.getElementById('menu');

  if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
  } else {
      menu.classList.add('hidden');
  }
}


