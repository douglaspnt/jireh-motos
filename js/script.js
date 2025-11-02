document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // MENU LATERAL
  // =========================
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const bars = menuBtn ? menuBtn.querySelectorAll('.bar') : [];

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('active');
      bars.forEach(bar => bar.classList.toggle('active'));
    });

    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove('active');
        bars.forEach(bar => bar.classList.remove('active'));
      }
    });
  }

  // =========================
  // CARROSSEL (apenas index.html)
  // =========================
  const carousel = document.getElementById('carousel');
  if (carousel) {
    let currentIndex = 0;
    const slides = Array.from(carousel.querySelectorAll('img'));
    
    slides.forEach((slide, i) => {
      if (i === 0) slide.classList.add('active');
      slide.style.position = 'absolute';
      slide.style.top = 0;
      slide.style.left = 0;
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

  // =========================
  // FORMULÁRIO (apenas contato.html)
  // =========================
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const url = "https://formspree.io/f/SEU_CODIGO"; // substituir pelo endpoint real

      if (url.includes("SEU_CODIGO")) {
        alert("Formulário ainda não configurado.");
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
          alert("Erro ao enviar formulário.");
        }
      } catch (err) {
        alert("Erro de conexão.");
        console.error(err);
      }
    });
  }
});

