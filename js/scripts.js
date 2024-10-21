// querySelector // 0 a 1 elemento
const heading = document.querySelector('.header__texto h2'); // 0 o 1 Elementos
heading.textContent = 'Nuevo Heading'
console.log(heading);

// querySelectorAll 
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html'
// Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');


// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);






// Eventos

// console.log(1);

// window.addEventListener('load',function() { // load espera a que el JS y los archivos que dependen del HTML esten listos
//     console.log(2);
// });

// window.onload = function() {
//     console.log(3); 
// }

// document.addEventListener('DOMContentLoaded', function() { // Solo espera por el html, pero no espera CSS o imagenes
//     console.log(4);
// });



// console.log(5);

// window.onscroll = function(evento) {
//     console.log(evento);
// }


// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault(); // en casi todos los formularios se requiere

//     // Validar un formulario

//     console.log('enviando formulario');
// });



// Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El Evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const { nombre, email, mensaje } = datos; 

    console.log(nombre);
    console.log(email);
    console.log(mensaje);
    

    // Enviar el formulario

    console.log('Enviando Formulario');
});

function leerTexto(e) {
    // console.log(e);

    // datos[e.targe.id] = e.targe.value;

    console.log(e.target);

    console.log(datos);
};


