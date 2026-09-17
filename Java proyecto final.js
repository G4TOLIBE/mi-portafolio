// Captura del formulario de contacto
const formContacto = document.querySelector('#form-contacto');
const inputNombre = document.querySelector('#nombre');
const mensajeRespuesta = document.querySelector('#mensaje-respuesta');

// Manejo del evento Submit
formContacto.addEventListener('submit', (e) => {
    e.preventDefault(); // Detiene el reinicio de la página

    const nombre = inputNombre.value;

    // Feedback dinámico en pantalla
    mensajeRespuesta.textContent = `¡Excelente, ${nombre}! Tu mensaje ha sido enviado con éxito.`;
    mensajeRespuesta.style.color = '#1abc9c';

    // Limpia las casillas
    formContacto.reset();
});