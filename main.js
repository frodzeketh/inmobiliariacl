const hamburger = document.querySelector(".custom-hamburger");
const navMenu = document.querySelector(".custom-nav-menu");
const navLinks = document.querySelectorAll(".custom-nav-link");

const toggleMobileMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

const closeMobileMenu = () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
};

// Evento para abrir/cerrar el menú cuando se hace clic en el ícono de hamburguesa
hamburger.addEventListener("click", toggleMobileMenu);

// Cierra el menú cuando se hace clic en un enlace de navegación
navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
