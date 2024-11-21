
// Agregar eventListener para cambio de theme 
// Add event listener for theme change
document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('themeSwitch');

  // Check localStorage for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  const main = document.querySelectorAll('main');

  if (savedTheme === 'dark') {
      themeSwitch.checked = true;
      main.forEach(section => section.classList.add('dark'));
  } else {
      themeSwitch.checked = false;
      main.forEach(section => section.classList.remove('dark'));
  }

  themeSwitch.addEventListener('change', () => {
      const isDarkMode = themeSwitch.checked;

      main.forEach(section => {
          if (isDarkMode) {
              section.classList.add('dark');
          } else {
              section.classList.remove('dark');
          }
      });

      // Save theme preference to localStorage
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
});


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


// Función para cargar las imagenes de redes sociales mediante for 

redesSociales = () => {

 const imagesRedes = [
  "./img/Linked.png",
  "./img/facebook.png",
  "./img/Instagram.png",
  "./img/Youtube.png"
];

const enlacesRedes = [
  "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ar.linkedin.com/&ved=2ahUKEwimt9zL5tKIAxX6q5UCHRI9IXIQFnoECAsQAQ&usg=AOvVaw3WCPIlTEKtHB2x806AhGhv",
  "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.facebook.com/%3Flocale%3Des_LA&ved=2ahUKEwiCjJu25tKIAxU2ppUCHeZaOvMQFnoECAkQAQ&usg=AOvVaw1I60-Ja6y72-wCvsxEihv7",
  "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/&ved=2ahUKEwijkYrC5tKIAxUvppUCHWAGGXYQFnoECAsQAQ&usg=AOvVaw1cBeRoOpMhZ3-x5M1sA3Fm",
  "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.youtube.com/%3Fhl%3Des&ved=2ahUKEwj-0be95tKIAxXjiJUCHYSuHvwQFnoECAsQAQ&usg=AOvVaw3zMzKvNQGAsWaZEJ7v5pXI"
];

const altClassRedes = [
  "linkedin",
  "facebook",
  "instagram",
  "youtube"
];

const containerRedes = document.querySelector('.redes');

for (let i = 0; i < imagesRedes.length; i++) {
  const htmlImageRedes = document.createElement("a");
  const liRedes = document.createElement('li');
  const imgRedes = document.createElement('img');
  imgRedes.src = imagesRedes[i];
  htmlImageRedes.href = enlacesRedes[i];
  htmlImageRedes.setAttribute("target","_blank");
  imgRedes.setAttribute("alt", altClassRedes[i]);
  imgRedes.setAttribute("class", altClassRedes[i]);
  htmlImageRedes.appendChild(imgRedes);
  liRedes.appendChild(htmlImageRedes);
  containerRedes.appendChild(liRedes);
  };
};

// Función para cargar las imagenes de metodos de pago mediante for 

metodosPago = () => {

  const imagesPagos = [
   "./img/icons8-visa-30.png",
   "./img/icons8-tarjeta-mastercard-30.png",
   "./img/mercadopago30px.png"
 ];
 
 const enlacesPagos = [
   "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.visa.com.ar/&ved=2ahUKEwjZl9LS5tKIAxUIrZUCHfJ0Ga0QFnoECBkQAQ&usg=AOvVaw0xqdVud793rlV7t1Qv96gG",
   "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.mastercard.com.ar/es-ar.html&ved=2ahUKEwiw_9XY5tKIAxV8r5UCHcxFO4YQFnoECBcQAQ&usg=AOvVaw2fOrB-jqEIHZnPMn7Sw-iN",
   "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.mercadopago.com.ar/&ved=2ahUKEwjbpN_g5tKIAxVAr5UCHfW_MQQQFnoECA0QAQ&usg=AOvVaw3RPvpESsI6fV-wWZHUWQ_D"
 ];
 
 const altClassPagos = [
   "visa",
   "mastercard",
   "mercadopago"
 ];
 
 const containerPagos = document.querySelector('.pagos');
 
 for (let i = 0; i < imagesPagos.length; i++) {
   const htmlImagePagos = document.createElement("a");
   const liPagos = document.createElement('li');
   const imgPagos = document.createElement('img');
   imgPagos.src = imagesPagos[i];
   htmlImagePagos.href = enlacesPagos[i];
   htmlImagePagos.setAttribute("target","_blank");
   imgPagos.setAttribute("alt", altClassPagos[i]);
   imgPagos.setAttribute("class", altClassPagos[i]);
   htmlImagePagos.appendChild(imgPagos);
   liPagos.appendChild(htmlImagePagos);
   containerPagos.appendChild(liPagos);
   };
 };

redesSociales();
metodosPago();