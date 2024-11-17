
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