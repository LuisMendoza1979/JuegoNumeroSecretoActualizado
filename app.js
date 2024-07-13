

//let titulo = document.querySelector(h1');
//titulo.innerHTML = "Juego del número secreto!";

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = "Elige un número del 1 al 10";

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoIntentos = 3;


console.log(numeroSecreto);

function verificarIntento() {
    //let numeroUsuario = document.querySelector('input'); si hay un solo input
    //cuando hay varios se usa la clase id y el metodo geteElementById
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto){

        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        //document.getElementById('intentar').setAttribute('disabled',true);
        //document.getElementById('reiniciar').removeAttribute('disabled');
        HabilitarYdesahabilitarBotones();
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p',"El número secreto es menor");
        } else {
            asignarTextoElemento('p',"El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }    
    
        if (intentos > numeroMaximoIntentos){
            asignarTextoElemento('p',`Llegaste al número máximo de ${numeroMaximoIntentos} intentos`);
            //document.getElementById('intentar').setAttribute('disabled',true);
            //document.getElementById('reiniciar').removeAttribute('disabled');
            HabilitarYdesahabilitarBotones();
        } 
        
    return;

    
    //alert("Click desde el botón");
}

function HabilitarYdesahabilitarBotones (){
    document.getElementById('intentar').setAttribute('disabled',true);
    document.getElementById('reiniciar').removeAttribute('disabled');
}


function limpiarCaja (){

    let valorCaja = document.querySelector('#valorUsuario');
        valorCaja.value = '';
}

//funcion para reducir u optimizar el código de las lineas 3 y 4
function asignarTextoElemento(elemento,texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el número generado está incluido en la lista

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

    } else {

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    document.getElementById('intentar').removeAttribute('disabled');
    asignarTextoElemento('h1', "Juego del número secreto!");
    asignarTextoElemento('p', `Elige un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego() {

    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    

}

condicionesIniciales();

