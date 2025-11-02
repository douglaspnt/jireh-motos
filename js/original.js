// MENU LATERAL (safe checks)
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // evita que o clique no botão feche imediatamente
    sidebar.classList.toggle('active');
    menuBtn.querySelector('.bar1')?.classList.toggle('active');
    menuBtn.querySelector('.bar2')?.classList.toggle('active');
    menuBtn.querySelector('.bar3')?.classList.toggle('active');
  });

  // Fecha menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('active');
      menuBtn.querySelector('.bar1')?.classList.remove('active');
      menuBtn.querySelector('.bar2')?.classList.remove('active');
      menuBtn.querySelector('.bar3')?.classList.remove('active');
    }
  });
}

// CARROSSEL (fade) - somente se existir
const carousel = document.getElementById('carousel');
if (carousel) {
  let currentIndex = 0;
  const slides = carousel.querySelectorAll('img');
  // garante que só uma imagem comece ativa
  slides.forEach((s, i) => {
    if (i === 0) s.classList.add('active');
    else s.classList.remove('active');
    s.style.position = 'absolute';
    s.style.left = 0;
    s.style.top = 0;
  });

  setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }, 3000);
}

// FORMULÁRIO (apenas na página contato)
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const url = "https://formspree.io/f/SEU_CODIGO"; // substitua com seu endpoint real
    if (url.includes("SEU_CODIGO")) {
      alert("Formulário ainda não configurado. Adicione o código Formspree no arquivo js/script.js.");
      return;
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        form.reset();
        if (successMessage) successMessage.style.display = "block";
      } else {
        alert("Ocorreu um erro. Tente novamente.");
      }
    } catch (err) {
      alert("Ocorreu um erro. Verifique sua conexão.");
      console.error(err);
    }
  });
}

