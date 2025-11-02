/* ===========================
   RESET E CONFIGURAÇÕES GERAIS
=========================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
}

body {
  background: #000;
  color: #fff;
  overflow-x: hidden;
}

/* ===========================
   CABEÇALHO FIXO
=========================== */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.logo-header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-header img {
  height: 60px;
}

.logo-header h1 {
  color: #fff;
  font-size: 2rem;
}

/* ===========================
   MENU HAMBURGUER
=========================== */
.menu-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  z-index: 1001;
}

.menu-btn span.bar {
  display: block;
  width: 35px;
  height: 4px;
  background: #fff;
  border-radius: 2px;
  transition: 0.3s;
}

.menu-btn span.bar1.active {
  transform: rotate(45deg) translate(6px, 6px);
}
.menu-btn span.bar2.active { opacity: 0; }
.menu-btn span.bar3.active {
  transform: rotate(-45deg) translate(7px, -7px);
}

.menu-btn .menu-text {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}

/* ===========================
   MENU LATERAL
=========================== */
.sidebar {
  position: fixed;
  top: 0;
  right: -250px;
  width: 250px;
  height: 100%;
  background: #111;
  padding: 2rem;
  transition: 0.4s;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar.active { right: 0; }

.sidebar a.menu-item {
  color: #fff;
  font-weight: bold;
  font-size: 1.3rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s;
}

.sidebar a.menu-item i {
  transition: transform 0.3s;
}

.sidebar a.menu-item:hover {
  color: #00e676;
  transform: scale(1.05);
}

.sidebar a.menu-item:hover i {
  transform: scale(1.2) rotate(5deg);
}

/* ===========================
   CARROSSEL
=========================== */
.carousel {
  margin-top: 80px;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel img.active { opacity: 1; }

/* ===========================
   INFORMAÇÕES ABAIXO CARROSSEL
=========================== */
.info-section {
  text-align: center;
  padding: 3rem 1rem;
}

.info-section .highlight {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
}

.info-section .highlight img { height: 50px; }

.info-section p {
  font-size: 1.3rem;
  margin: 0.5rem 0;
}

/* ===========================
   WHATSAPP FLUTUANTE
=========================== */
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #25D366;
  color: #fff;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: 0.3s;
}

.whatsapp-float:hover {
  transform: scale(1.2);
  box-shadow: 0 12px 25px rgba(0,0,0,0.4);
}

.whatsapp-float span.tooltip {
  position: absolute;
  bottom: 90px;
  right: 0;
  background: #25D366;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
  opacity: 0;
  transition: 0.3s;
  white-space: nowrap;
}

.whatsapp-float:hover span.tooltip { opacity: 1; }

/* ===========================
   SEÇÃO DE SERVIÇOS (CARDS)
=========================== */
.services-section {
  margin-top: 100px;
  text-align: center;
}

.services-section h2 {
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 0 12px #00e676;
  margin-bottom: 3rem;
}

.services-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  padding: 3rem 1rem 5rem 1rem;
}

.service-card {
  background: #111;
  color: #fff;
  padding: 3rem;
  border-radius: 15px;
  min-width: 240px;
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  transition: 0.3s;
  box-shadow: 0 0 15px rgba(0, 230, 118, 0.4);
}

.service-card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 0 25px rgba(0, 230, 118, 0.6);
}

/* ===========================
   RESPONSIVO
=========================== */
@media(max-width:900px) {
  .sidebar { width: 200px; }
  .info-section .highlight { flex-direction: column; gap: 10px; }
  .services-cards { flex-direction: column; gap: 2rem; padding: 2rem 1rem 3rem 1rem; }
}

@media(max-width:600px) {
  .logo-header h1 { font-size: 1.6rem; }
  .menu-btn .menu-text { font-size: 1.2rem; }
  .info-section .highlight { font-size: 2rem; }
  .info-section p { font-size: 1.1rem; }
  .services-section h2 { font-size: 2.5rem; }
  .service-card { padding: 2rem; font-size: 1.2rem; }
}

