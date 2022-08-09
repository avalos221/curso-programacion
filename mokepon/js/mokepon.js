let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar =document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click" ,reiniciarJuego)
}
function seleccionarMascotaJugador() {
    let inputHipodoger = document.getElementById("hipodoger")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatiguella = document.getElementById("ratiguella")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoger.checked){
        spanMascotaJugador.innerHTML = "hipodoger "
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "capipepo "
    } else if(inputRatiguella.checked){
        spanMascotaJugador.innerHTML = "ratiguella "
    } else {
        alert("debes seleccionar una mascota")
    }   

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById
    ("mascota-enemigo")

    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "hipodoger"
    } else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "capipepo"
    } else if(mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "ratiguella"
    }
}

function ataqueFuego(){
    ataqueJugador = "fuego"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "agua"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "tierra"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "fuego"
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = "agua"
    } else if(ataqueAleatorio == 3){
        ataqueEnemigo = "tierra"
    }
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador){
        crearMensajes("empate")
    } else if(ataqueJugador == "fuego" && ataqueEnemigo == "tierra"){
        crearMensajes("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "agua" && ataqueEnemigo == "fuego"){
        crearMensajes("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "tierra" && ataqueEnemigo == "agua"){
        crearMensajes("ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else{
        crearMensajes("perdiste")
        vidasJugador-- 
        spanVidasJugador.innerHTML = vidasJugador
    }

    //revisar vidas
    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajesFinal("felicitaciones ganaste")
    } else if(vidasJugador == 0){
        crearMensajesFinal("lo siento perdiste")
    }
}

function crearMensajes(resultado){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + " " + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajesFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min  + 1) + min)
}

window.addEventListener("load", iniciarJuego)