// 1 Agrega a tus enlaces de navegación la clase "smooth-scroll" y el atributo "data-target" con el ID de la sección de destino.
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});

//2 
// Obtener el botón y el elemento que se va a mostrar/ocultar
// Obtener el botón y el elemento de información
function toggleInformacion() {
    const informacionDiv = document.getElementById('informacion');
    const toggleButton = document.getElementById('toggleButton');

    if (informacionDiv.style.display === 'none' || informacionDiv.style.display === '') {
        informacionDiv.style.display = 'block';  // Mostrar la información
        toggleButton.textContent = 'Ocultar Información';
    } else {
        informacionDiv.style.display = 'none';   // Ocultar la información
        toggleButton.textContent = 'Mostrar Información';
    }
}


//3
function actualizarReloj() {
    const relojElemento = document.getElementById('reloj');
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    // Formatear la hora para asegurarse de que siempre tenga dos dígitos
    const horaFormateada = hora.toString().padStart(2, '0');
    const minutosFormateados = minutos.toString().padStart(2, '0');
    const segundosFormateados = segundos.toString().padStart(2, '0');

    // Actualizar el contenido del elemento con la hora actual
    relojElemento.textContent = `${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
}

// Actualizar el reloj cada segundo (1000 milisegundos)
setInterval(actualizarReloj, 1000);

// Llamar a la función para configurar el reloj en el inicio
actualizarReloj();
//4


const colores = ["#ff0000", "#996600", "#999999"];

function cambiarColor() {
    // Obtenemos el color actual del fondo
    const colorActual = document.body.style.backgroundColor;

    // Obtenemos el siguiente color de la lista
    const colorSiguiente = colores[(colores.indexOf(colorActual) + 1) % colores.length];

    // Cambiamos el color de fondo
    document.body.style.backgroundColor = colorSiguiente;
}

const cambiarColor = document.querySelector("#cambiarColor");
cambiarColor.addEventListener("click", cambiarColor);