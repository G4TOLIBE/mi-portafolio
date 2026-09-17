const formContacto = document.querySelector('#form-contacto');
const mensajeRespuesta = document.querySelector('#mensaje-respuesta');

if (formContacto) {
    formContacto.addEventListener('submit', async (e) => {
        e.preventDefault(); // Detenemos el envío tradicional

        const datos = new FormData(formContacto);
        
        // Enviamos la información a Formspree en segundo plano
        const respuesta = await fetch(formContacto.action, {
            method: 'POST',
            body: datos,
            headers: { 'Accept': 'application/json' }
        });

        if (respuesta.ok) {
            mensajeRespuesta.textContent = '¡Gracias! Tu mensaje ha sido enviado a mi correo.';
            mensajeRespuesta.style.color = '#1abc9c';
            formContacto.reset();
        } else {
            mensajeRespuesta.textContent = 'Hubo un error al enviar el mensaje. Intenta de nuevo.';
            mensajeRespuesta.style.color = '#e74c3c';
        }
    });
}
