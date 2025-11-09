// ==============================
// MENU LATERAL
// ==============================
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', e => {
    e.stopPropagation(); // evita fechar imediatamente
    sidebar.classList.toggle('active');
  });

  document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });
}

// ==============================
// CARROSSEL RESPONSIVO FUNCIONAL
// ==============================
const carousel = document.getElementById('carousel');
const slides = carousel.querySelectorAll('img'); // ajustado para suas imagens atuais
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Ajusta altura do carrossel para caber na tela sem cortar imagens
function adjustHeight() {
  const img = slides[currentIndex];
  if (!img) return;

  if (img.complete) {
    let imgHeight = img.naturalHeight * (carousel.offsetWidth / img.naturalWidth);
    let maxHeight = window.innerHeight * 0.9; // 90% da altura da tela
    carousel.style.height = Math.min(imgHeight, maxHeight) + 'px';
  } else {
    img.addEventListener('load', () => {
      let imgHeight = img.naturalHeight * (carousel.offsetWidth / img.naturalWidth);
      let maxHeight = window.innerHeight * 0.9;
      carousel.style.height = Math.min(imgHeight, maxHeight) + 'px';
    });
  }
}

// Eventos iniciais
window.addEventListener('load', () => {
  adjustHeight();
  showSlide(currentIndex);
});

window.addEventListener('resize', adjustHeight);

// Troca automática de slides
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  adjustHeight();
}, 3000);

// Setas do carrossel (se quiser manter setas)
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    adjustHeight();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    adjustHeight();
  });
}

// ==============================
// FORMULÁRIO DE CONTATO
// ==============================
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (form && successMessage) {
  successMessage.style.display = 'none';

  form.addEventListener('submit', e => {
    e.preventDefault(); // evita envio real
    successMessage.style.display = 'block';
    form.reset();
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  });
}

