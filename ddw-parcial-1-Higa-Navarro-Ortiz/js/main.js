
// Agregar eventListener para cambio de theme 
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch')

    themeSwitch.addEventListener('change', () => {
        console.log('LLEGO A ESTA PARTE')
        const main = document.querySelectorAll('main');
        if (themeSwitch.checked) {
          main.forEach(section => {
            section.classList.add('dark');
            console.log('checked classList', section.classList)
          });
        } else {
          main.forEach(section => {
            section.classList.remove('dark');
            console.log('unchecked classList', section.classList)
          });
        }
      });
})

// Funcionalidad para esconder navbar con scrolldown y mostrarla con scrollup

let prevScrollpos = window.scrollY;

window.addEventListener('scroll', function() {
  let currentScrollPos = window.scrollY;
  const navbar = document.querySelector('header');
  
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  
  prevScrollpos = currentScrollPos;
});
