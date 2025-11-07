function ValidacionFormulario(event) {
  event.preventDefault();
  let formValid = true;
  // agregar codigo para funcionalidad del contacto y validaciones
  // falta un div para agregar errores en el html o mostrarlos debajo de los inputs como te parezca mejor

  /*======================================Obtencion de elementos===============================================*/

  const formulario = document.getElementById("formularioContacto");

  const nombreInput = document.getElementById("nombre");
  const errorNombreDiv = document.getElementById("errorNombre");
  errorNombreDiv.textContent = "";

  const emailInput = document.getElementById("email"); // agregale la validacion del .com si queres ----> Y si no quiero?
  const errorEmailDiv = document.getElementById("errorEmail");
  errorEmailDiv.textContent = "";

  const telefonoInput = document.getElementById("telefono");
  const errorTelefonoDiv = document.getElementById("errorTelefono");
  errorTelefonoDiv.textContent = "";

  const mensajeExitoDiv = document.getElementById("Exito-mensaje");
  mensajeExitoDiv.textContent = "";
  mensajeExitoDiv.classList.remove("Exito-mensaje");

  /*======================================Validaciones===============================================*/

  const nombreValor = nombreInput.value.trim();
  const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (regexNombre.test(nombreValor) === false) {
    errorNombreDiv.textContent =
      "El nombre solo debe contener letras y espacios.";
    formValid = false;
  } else if (nombreValor.length === 0) {
    errorNombreDiv.textContent = "El campo nombre es obligatorio.";
    formValid = false;
  } else if (nombreValor.length < 5) {
    errorNombreDiv.textContent = "El nombre debe tener al menos 5 caracteres.";
    formValid = false;
  }

  const emailValor = emailInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.(com|ar|com\.ar)$/;
  if (!emailValor) {
    errorEmailDiv.textContent = "El campo email es obligatorio.";
    formValid = false;
  } else if (!regexEmail.test(emailValor)) {
    errorEmailDiv.textContent =
      "El formato de email no es valido (ingresar por ej. lucas50@gmail.com/.ar / hotmail.com/.ar).";
    formValid = false;
  }

  const telefonoValor = telefonoInput.value.trim();
  const regexTelefono = /^\d{7,15}$/;
  if (!telefonoValor) {
    errorTelefonoDiv.textContent = "El campo telefono es obligatorio.";
    formValid = false;
  } else if (!regexTelefono.test(telefonoValor)) {
    errorTelefonoDiv.textContent =
      "El formato de telefono no es valido (debe ser por ej. 2664786574).";
    formValid = false;
  }

  /*======================================Mensaje de exito===============================================*/

  if (formValid) {
    mensajeExitoDiv.textContent = "¡Mensaje enviado con exito!";
    mensajeExitoDiv.classList.add("Exito-mensaje");
    formulario.reset();
  } else {
    mensajeExitoDiv.classList.remove("Exito-mensaje");
    mensajeExitoDiv.textContent = "";
  }
  return false;
}
