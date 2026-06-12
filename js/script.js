const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = mobileMenu.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
      mobileMenu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const slides = Array.from(document.querySelectorAll("[data-slide]"));
const nextButton = document.querySelector("[data-next-slide]");
const prevButton = document.querySelector("[data-prev-slide]");
let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });
}

function startCarousel() {
  if (slides.length < 2) return;
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => showSlide(currentSlide + 1), 4000);
}

if (slides.length) {
  showSlide(0);
  startCarousel();
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startCarousel();
  });
}

if (prevButton) {
  prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startCarousel();
  });
}
