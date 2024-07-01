//Declaración de variables globales
let numeroSecreto = 0;
let intentosUsuario = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentosPermitidos = 5;


console.log(numeroSecreto);

//Funciones para texto en los elementos
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =  texto;
    return;
}


//Función que realiza la verificación del intento
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste! El número secreto es ${numeroSecreto}! y lo hiciste en 
            ${intentosUsuario} ${(intentosUsuario === 1) ? "intento" : "intentos"}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            
    } else {
// El usuario no acertó
        if (numeroDeUsuario > numeroSecreto ){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
    intentosUsuario++;
        if(intentosUsuario === intentosPermitidos) {
            asignarTextoElemento('p', '¡Te queda una ultima chance para adivinar!');

        } else if (intentosUsuario > intentosPermitidos) {
            asignarTextoElemento('p', '¡Lo siento, has perdido el juego! Inicia una nueva partida');
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('intentar').setAttribute('disabled', 'true');
        } 
    console.log(`Esta jugando su intento número ${intentosUsuario}`)
    limpiarInput();

    }
    return;
};

//Función que limpia la caja del input
function limpiarInput(){
    document.querySelector('#valorUsuario').value = '';
    
}

//Función que genera un número aleatorio
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

console.log(numeroGenerado);
console.log(listaNumerosSorteados);
//si ya sorteamos todos los números
if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
} else {
    // Si el número a generar esta incluido en la lista. El concepto de recursividad; 
    //cuando una función se llam así misma.
    
            if(listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();

            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    }

// Función que genera las condiciones de inicio
function condicionesDeInicio(){
asignarTextoElemento('h1', 'El juego del Número Secreto');
asignarTextoElemento('p',`¡Indica un número del 1 al ${numeroMaximo}!`);
document.getElementById('intentar').removeAttribute('disabled');
numeroSecreto = generarNumeroSecreto();
intentosUsuario = 1;
console.log(`Intento ${intentosUsuario}`);

}

//Función que reinicia el juego
function reiniciarJuego(){
//Limpiar Caja
limpiarInput();
//Mensaje de Inicio, Reiniciar numero secreto,Reiniciar intentos
condicionesDeInicio();
//Deshabilitar botón de reiniciar juego,
document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

//llamada a las condiciones de inicio
condicionesDeInicio();
