let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;

function asigarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log("numeroDeUsuario", numeroDeUsuario);
    console.log("numeroSecreto", numeroSecreto);
    
    if(numeroDeUsuario == numeroSecreto)
    {
        asigarTextoElemento('h1', `Acertaste el numero! en ${intentos} ${intentos === 1 ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asigarTextoElemento('p', 'El numero secreto es menor');
        } else{
            asigarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function intentoDeUsuario(){
    alert('Click desde el boton');
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asigarTextoElemento('p', 'Juego terminado')
    }else{
         //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    return;
   
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar condicionesIniciales
    condicionesIniciales();
    //Deshabilitar el boton
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function condicionesIniciales(){
    asigarTextoElemento('h1', 'Juego del numero secreto');
    asigarTextoElemento('p', `Elige un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();
