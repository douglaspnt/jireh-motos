document.addEventListener('DOMContentLoaded', () => {
  // ===========================
  // MENU LATERAL (HAMBURGUER)
  // ===========================
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
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

  // ===========================
  // CARROSSEL (FADE)
  // ===========================
  const carousel = document.getElementById('carousel');
  if (carousel) {
    let currentIndex = 0;
    const slides = carousel.querySelectorAll('img');

    // Garante que apenas a primeira imagem comece ativa
    slides.forEach((slide, i) => {
      if (i === 0) slide.classList.add('active');
      else slide.classList.remove('active');
      slide.style.position = 'absolute';
      slide.style.left = 0;
      slide.style.top = 0;
      slide.style.width = '100%';
      slide.style.height = '100%';
      slide.style.objectFit = 'cover';
    });

    setInterval(() => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }, 3000);
  }

  // ===========================
  // FORMULÁRIO DE CONTATO
  // ===========================
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const url = "https://formspree.io/f/SEU_CODIGO"; // Coloque seu endpoint Formspree aqui

      if (url.includes("SEU_CODIGO")) {
        alert("Formulário ainda não configurado. Adicione o código Formspree no script.js.");
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
          alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
        }
      } catch (err) {
        alert("Erro de conexão. Verifique sua internet.");
        console.error(err);
      }
    });
  }
});

