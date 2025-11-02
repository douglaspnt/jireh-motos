// ==============================
// MENU LATERAL
// ==============================
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', e => {
    e.stopPropagation(); // evita fechar imediatamente
    sidebar.classList.toggle('active');
    menuBtn.querySelector('.bar1')?.classList.toggle('active');
    menuBtn.querySelector('.bar2')?.classList.toggle('active');
    menuBtn.querySelector('.bar3')?.classList.toggle('active');
  });

  document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('active');
      menuBtn.querySelector('.bar1')?.classList.remove('active');
      menuBtn.querySelector('.bar2')?.classList.remove('active');
      menuBtn.querySelector('.bar3')?.classList.remove('active');
    }
  });
}

// ==============================
// CARROSSEL RESPONSIVO FUNCIONAL
// ==============================
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function adjustHeight() {
  const img = slides[currentIndex].querySelector('img');
  if (img.complete) {
    let imgHeight = img.naturalHeight * (carousel.offsetWidth / img.naturalWidth);
    let maxHeight = window.innerHeight * 0.8;
    carousel.style.height = Math.min(imgHeight, maxHeight) + 'px';
  } else {
    img.addEventListener('load', () => {
      let imgHeight = img.naturalHeight * (carousel.offsetWidth / img.naturalWidth);
      let maxHeight = window.innerHeight * 0.8;
      carousel.style.height = Math.min(imgHeight, maxHeight) + 'px';
    });
  }
}

window.addEventListener('load', () => {
  adjustHeight();
  showSlide(currentIndex);
});

window.addEventListener('resize', adjustHeight);

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  adjustHeight();
}, 3000);

// ==============================
// FORMULÁRIO DE CONTATO
// ==============================
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (form && successMessage) {
  // Garante que a mensagem comece invisível
  successMessage.style.display = 'none';

  form.addEventListener('submit', e => {
    e.preventDefault(); // evita envio real

    // Aqui você poderia adicionar fetch/axios para enviar a mensagem de verdade
    // Simulação de envio bem-sucedido:
    successMessage.style.display = 'block';
    form.reset();

    // Oculta a mensagem após 5 segundos
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  });
}

