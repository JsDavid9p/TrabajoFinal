// public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in-section, .fade-in-item, .animate-pop-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible'); // Puedes usar esta clase para activar la animación
          // O simplemente podrías tener la animación empezar directamente sin clase adicional
          // si la animación ya está definida para no correr hasta 'forwards'
          observerInstance.unobserve(entry.target); // Deja de observar una vez visible
        }
      });
    }, { threshold: 0.1 }); // Activa cuando el 10% del elemento es visible

    animatedElements.forEach(el => {
      observer.observe(el);
    });
  } else {
    // Fallback para navegadores sin IntersectionObserver: simplemente muestra los elementos
    animatedElements.forEach(el => {
      // Aquí podrías quitar la opacidad inicial si la animación depende de una clase 'is-visible'
      // Por ahora, la animación CSS ya está configurada para ejecutarse 'forwards'
    });
  }
});