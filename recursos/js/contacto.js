function ValidacionFormulario(event) {
    // agregar codigo para funcionalidad del contacto y validaciones
    // falta un div para agregar errores en el html o mostrarlos debajo de los inputs como te parezca mejor
        
    const formulario = document.getElementById("formulario-contacto");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email"); // agregale la validacion del .com si queres
    const telefonoInput = document.getElementById("telefono");
    const mensajeText = document.getElementById("mensaje");
    event.preventDefault();


};