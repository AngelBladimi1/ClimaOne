// ===== ANIMAR TARJETAS =====
const cards = document.querySelectorAll(".card");
function animarCards() {
  const scrollTop = window.scrollY + window.innerHeight - 100;
  cards.forEach(card => {
    if (scrollTop > card.offsetTop && !card.classList.contains("aparecer")) {
      card.classList.add("aparecer");
    }
  });
}
window.addEventListener("scroll", animarCards);
window.addEventListener("load", animarCards);

// ===== FRASES DINÁMICAS =====
const frases = [
  "Tu confort, nuestra especialidad",
  "Instalación rápida y profesional",
  "Mantenimiento que garantiza frescura",
  "Reparaciones con garantía y confianza",
  "Soluciones en climatización a tu medida"
];
const fraseElemento = document.getElementById("frase-dinamica");
let indice = 0;
function cambiarFrase() {
  fraseElemento.style.opacity = 0;
  setTimeout(() => {
    indice = (indice + 1) % frases.length;
    fraseElemento.textContent = frases[indice];
    fraseElemento.style.opacity = 1;
  }, 600);
}
setInterval(cambiarFrase, 4000);

// ===== FORMULARIO DIRECTO A WHATSAPP =====
const form = document.getElementById("contactForm");
const mensajeExito = document.getElementById("mensajeExito");

form.addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    mostrarMensaje("Por favor completa todos los campos.", "red");
    return;
  }

  const mensajeWhats = `Hola, mi nombre es ${nombre}. Mi correo es ${email}. Mensaje: ${mensaje}`;
  const numero = "595987419188";
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensajeWhats)}`, "_blank");
  mostrarMensaje(`¡Gracias ${nombre}! Te contactaremos por WhatsApp.`, "green");
  form.reset();
});

function mostrarMensaje(texto, color) {
  mensajeExito.textContent = texto;
  mensajeExito.style.display = "block";
  mensajeExito.style.color = color;
  setTimeout(() => (mensajeExito.style.display = "none"), 5000);
}

// ===== MENÚ MÓVIL Y SCROLL SUAVE =====
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("#nav ul");
const navLinks = document.querySelectorAll("#nav ul li a");

hamburger.addEventListener("click", ()=>{
  nav.classList.toggle("show");
});

navLinks.forEach(link=>{
  link.addEventListener("click", (e)=>{
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
    if(window.innerWidth <= 768){
      nav.classList.remove("show");
    }
  });
});

// ===== GALERÍA LIGHTBOX =====
document.querySelectorAll(".galeria-grid img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox");
    overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", () => overlay.remove());
  });
});
