const btn = document.querySelector('.btn')
const mainNav = document.querySelector('.nav')
const equis = document.querySelector('.nover')

btn.addEventListener("click", () => {
  mainNav.classList.toggle("viewNav");
  btn.classList.toggle("nover");
  equis.classList.toggle("ver");
});

equis.addEventListener("click", () => {
  mainNav.classList.toggle("viewNav");
  equis.classList.toggle("ver");
  btn.classList.toggle("nover")  
});

// SEGUNDOS CAMBIOS

const Change = document.querySelector('.Modo')
const ImgLuna = document.querySelector('.mon')
const ImgSol = document.querySelector('.ModoDos')
const Body = document.querySelector('.body')

Change.addEventListener('click', () => {
    console.log('Saliendo');
    Body.classList.toggle('dark')
    ImgLuna.classList.toggle('nover')
    ImgSol.classList.toggle('ver')
    Change.classList.toggle('nover')
})

ImgSol.addEventListener('click', () => {
    console.log('SaliendoBien');
    Body.classList.toggle('dark')
    ImgLuna.classList.toggle('nover')
    ImgSol.classList.toggle('ver')
    Change.classList.toggle('ver')
})

const Copiar = document.querySelector('.copiar')

    Copiar.addEventListener('click', () =>  {

    var campoCorreo = document.getElementById("correo");


    campoCorreo.select();


    document.execCommand("copy");

 
    window.getSelection().removeAllRanges();


    alert("Correo copiado: " + campoCorreo.value);
  }
    )
