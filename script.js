const jugador = {
    nombre: "",
    puntos: 0,
    categoriaActual: "",
    puntosTotales: 0,
    categoriasJugadas: {

        historia: false,
        ciencia: false,
        vehiculos: false,
        arte: false,
        deportes: false,
        geografia: false,
    },
}

let preguntas = [];
let preguntaActualIndex = 0;

let toastBox = document.querySelector('#toastBox');

function mostrarToast(mensaje) {
    let toast = document.createElement('div');
    toast.classList.add('tostadita');
    toast.innerHTML = mensaje;
    toastBox.appendChild(toast)

    setTimeout(() => {
        toast.remove();
    }, 3000)
}

//chequea si una categoria hasido jugada y modifica a true el valor boolean del objeto categoriasJugadas;
function chequearCategorias(jugador) {
    for (const categoria in jugador.categoriasJugadas) {
        if (jugador.categoriasJugadas[categoria]) {
            console.log("lee" + jugador.categoriasJugadas[categoria])
            document.querySelector("#cat-" + categoria).classList.add("categoriaGanada");
            document.querySelector("#cat-" + categoria).classList.add("insigniaCategoria");
        }
        else {
            console.log("nolee" + jugador.categoriasJugadas[categoria])
        }
    }
    if (todasCategoriasJugadas()) {
        // Todas las categorías están jugadas, mostrar la pantalla final del juego
        mostrarPantallaFinal();
    }
}

//chequea si se jugaron todas las categorias. 
function todasCategoriasJugadas() {
    for (const categoria in jugador.categoriasJugadas) {
        if (!jugador.categoriasJugadas[categoria]) {
            return false;
        }
    }
    return true;
}

function mostrarPantallaInicial() {
    
    document.getElementById("pantallaJuego").style.display = "none";
    document.getElementById("pantallaFinal").style.display = "none";
    document.getElementById("pantallaFinalCategoria").style.display = "none";

    chequearCategorias(jugador);
}


mostrarPantallaInicial();


function seleccionarCategoria(categoria) {

    if (jugador.categoriasJugadas[categoria] == true) {
        console.log(`Ya jugaste la categoría ${categoria}.`);
        mostrarToast(`Ya jugaste la categoría ${categoria}.`)

        return;
    }

    jugador.categoriaActual = categoria;
    // Muestra en pantalla la categoría seleccionada por el jugador.
    document.querySelector("#categoria").textContent = categoria;

    // Llama a cargarPreguntas solo si la categoría no ha sido jugada.
    cargarPreguntas(categoria);
    mostrarPantallaJuego();
}


function mostrarPantallaJuego() {
    //tomo el nombre ingresado por el usuario en el input y lo muestro en la pantalla de juego;
    let contenidoInput = document.querySelector("#nombreIngresadoJugador");
    document.querySelector(".nombreJugador").textContent = contenidoInput.value;
    jugador.nombre = contenidoInput.value;

    //muestro la pantalla de juego y oculto las demas;
    document.querySelector('#pantallaJuego').style.display = 'block';
    document.querySelector('#pantallaInicial').style.display = 'none';
    document.querySelector('#finalCategoria').style.display = 'none';
    document.querySelector('#pantallaFinal').style.display = 'none';


}

function mostrarPantallaFinalCategoria(categoria) {
    document.querySelector('#pantallaJuego').style.display = 'none';
    document.querySelector('#pantallaInicial').style.display = 'none';
    document.querySelector('#finalCategoria').style.display = 'block';
    document.querySelector('#pantallaFinal').style.display = 'none';

    //asigna categoria ganada al objeto categoriasJugadas.
    jugador.categoriasJugadas[jugador.categoriaActual] = true;
    console.log(jugador);   
    jugador.puntosTotales= jugador.puntos;
    document.querySelector('#puntuacionActual').textContent = jugador.puntos;

}

function mostrarPantallaFinal() {
    document.querySelector('#pantallaJuego').style.display = 'none';
    document.querySelector('#pantallaInicial').style.display = 'none';
    document.querySelector('#finalCategoria').style.display = 'none';
    document.querySelector('#pantallaFinal').style.display = 'block';

    //muestra los stats del jugador
    document.querySelector('#jugadorPantallaFinal').textContent = jugador.nombre;
    document.querySelector('#puntuacionTotal').textContent = jugador.puntosTotales;
    pantallaFinal.style.display = 'flex';
}


function regresarAlInicio() {
    document.querySelector('#pantallaJuego').style.display = 'none';
    document.querySelector('#pantallaInicial').style.display = 'block';
    document.querySelector('#finalCategoria').style.display = 'none';
    document.querySelector('#pantallaFinal').style.display = 'none';
    jugador.categoriaActual = '';
    preguntaActualIndex = 0;
    chequearCategorias(jugador);

}



async function cargarPreguntas(categoria) {
    try {
        const response = await fetch('./preguntas.json');
        if (!response.ok) {
            throw new Error("No se pueden cargar las preguntas");
        }

        const data = await response.json();

        if (data.categorias && data.categorias[categoria]) {
            preguntas = data.categorias[categoria];
            console.log(preguntas);
            mostrarSiguientePregunta();
        } else {
            throw new Error(`No se encontraron preguntas para la categoría '${categoria}'`);
        }
    } catch (error) {
        console.error(error);
    }
}


function limpiarOpciones() {
    document.getElementById("opcion0").classList.remove("opcionAcertada");
    document.getElementById("opcion1").classList.remove("opcionAcertada");
    document.getElementById("opcion2").classList.remove("opcionAcertada");
    document.getElementById("opcion3").classList.remove("opcionAcertada");
    document.getElementById("opcion0").classList.remove("opcionNoAcertada");
    document.getElementById("opcion1").classList.remove("opcionNoAcertada");
    document.getElementById("opcion2").classList.remove("opcionNoAcertada");
    document.getElementById("opcion3").classList.remove("opcionNoAcertada");
    document.getElementById("opcion0").classList.add("btn");
    document.getElementById("opcion1").classList.add("btn");
    document.getElementById("opcion2").classList.add("btn");
    document.getElementById("opcion3").classList.add("btn");

}



function iniciarJuego() {
   
        let contenidoInput = document.querySelector("#nombreIngresadoJugador");
        jugador.nombre = contenidoInput.value; // Corregir aquí
        document.querySelector(".nombreJugador").textContent = jugador.nombre;
        mostrarPantallaJuego();
        mostrarSiguientePregunta();
    }




function mostrarSiguientePregunta() {
    if (preguntaActualIndex < preguntas.length) {
        let preguntaActual = preguntas[preguntaActualIndex];
        // Muestra la pregunta en la pantalla y configura los botones de respuesta

        //tomar los elementos del document:
        limpiarOpciones();
        let elementoPregunta = document.querySelector('#pregunta');
        let elementoOpcion0 = document.querySelector("#opcion0");
        let elementoOpcion1 = document.querySelector("#opcion1");
        let elementoOpcion2 = document.querySelector("#opcion2");
        let elementoOpcion3 = document.querySelector("#opcion3");

        //reemplazar por los elementos del array:
        elementoPregunta.textContent = preguntaActual.enunciado;
        elementoOpcion0.textContent = preguntaActual.opciones[0];
        elementoOpcion1.textContent = preguntaActual.opciones[1];
        elementoOpcion2.textContent = preguntaActual.opciones[2];
        elementoOpcion3.textContent = preguntaActual.opciones[3];

        preguntaActualIndex++;
    } else {
        // Mostrar pantalla de final de categoría

        mostrarPantallaFinalCategoria(jugador.categoriaActual);

    }
}

function chequearRespuesta(eleccion) {
    let preguntaActual = preguntas[preguntaActualIndex - 1];
    let opcionSeleccionada = preguntaActual.opciones[eleccion];

    if (opcionSeleccionada == preguntaActual.respuestaCorrecta) {
        //console.log(preguntaActual.respuestaCorrecta)
        document.getElementById("opcion" + eleccion).classList.add("opcionAcertada");
        jugador.puntos++;
        document.querySelector("#puntosObtenidos").textContent = jugador.puntos;
    } else {
        document.getElementById("opcion" + eleccion).classList.add("opcionNoAcertada");
    }

    setTimeout(() => mostrarSiguientePregunta(preguntaActualIndex), 1000);
}


function reiniciarJuego() {
    jugador.nombre = '';
    jugador.categoriaActual = '';
    jugador.puntos = 0;
    jugador.puntosTotales =0;
    preguntaActualIndex = 0;
    preguntas = [];
    jugador.categoriasJugadas = {
        historia: false,
        ciencia: false,
        vehiculos: false,
        arte: false,
        deportes: false,
        geografia: false,
    },
    
    window.location = '/';

    
}

