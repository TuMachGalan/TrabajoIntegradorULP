
document.addEventListener('DOMContentLoaded', function() {
    const contenedorCarrusel = document.querySelector('.carrusel-contenedor');
    
    if (contenedorCarrusel) {
        const carrusel = contenedorCarrusel.querySelector('.carrusel');
        const items = carrusel.querySelectorAll('.carrusel-item');
        const prevBtn = contenedorCarrusel.querySelector('.carrusel-anterior');
        const nextBtn = contenedorCarrusel.querySelector('.carrusel-siguiente');
        
        let indiceActual = 0;
        const totalItems = items.length;

        function actualizarCarrusel() {
            const desplazamiento = -indiceActual * 100;
            carrusel.style.transform = `translateX(${desplazamiento}%)`;
        }

        function siguiente() {
            indiceActual = (indiceActual + 1) % totalItems;
            actualizarCarrusel();
        }

        function anterior() {
            indiceActual = (indiceActual - 1 + totalItems) % totalItems;
            actualizarCarrusel();
        }

        prevBtn.addEventListener('click', anterior);
        nextBtn.addEventListener('click', siguiente);

        let intervalo = setInterval(siguiente, 7000);

        contenedorCarrusel.addEventListener('mouseenter', () => {
            clearInterval(intervalo);
        });
        
        contenedorCarrusel.addEventListener('mouseleave', () => {
            intervalo = setInterval(siguiente, 5000);
        });

        actualizarCarrusel();

    }
});