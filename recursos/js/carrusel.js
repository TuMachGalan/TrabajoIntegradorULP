document.addEventListener("DOMContentLoaded", function () {
  const contenedorCarrusel = document.querySelector(".carrusel-contenedor");

  if (contenedorCarrusel) {
    const carrusel = contenedorCarrusel.querySelector(".carrusel");
    const items = Array.from(carrusel.querySelectorAll(".carrusel-item"));
    const prevBtn = contenedorCarrusel.querySelector(".carrusel-anterior");
    const nextBtn = contenedorCarrusel.querySelector(".carrusel-siguiente");

    let indiceActual = 0;
    const totalItems = items.length;

    function actualizarCarrusel() {
      const desplazamiento = indiceActual * 100;
      carrusel.style.transform = `translateX(-${desplazamiento}%)`;
    }

    function siguiente() {
      indiceActual = (indiceActual + 1) % totalItems;
      actualizarCarrusel();
    }

    function anterior() {
      indiceActual = (indiceActual - 1 + totalItems) % totalItems;
      actualizarCarrusel();
    }

    prevBtn.addEventListener("click", anterior);
    nextBtn.addEventListener("click", siguiente);

    let intervalo = setInterval(siguiente, 5000);

    contenedorCarrusel.addEventListener("mouseenter", () => {
      clearInterval(intervalo);
    });

    contenedorCarrusel.addEventListener("mouseleave", () => {
      intervalo = setInterval(siguiente, 5000);
    });

    actualizarCarrusel();
  }




    //coso pa el chino cochino

    const switchBtn = document.querySelector(".swich");
  
    switchBtn.addEventListener("click", function () {
<<<<<<< HEAD
      document.body.classList.toggle("idioma-chino");
=======
      // Seleccionar el body y toggle una clase
      document.body.classList.toggle("idioma-chino");
      
>>>>>>> 7000cd6be93172be0a43f963ba88aadbb96a35ea
      // Cambiar banderas
      const switchText = switchBtn.querySelector("i");
      switchText.textContent = document.body.classList.contains("idioma-chino") ? "🇨🇳 / 🇦🇷" : "🇦🇷 / 🇨🇳";});  
  });