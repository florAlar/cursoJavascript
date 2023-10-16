
//definir objeto jugador


const jugador = {
    nombre: "",
    puntos: 0,
    nivelActualJugador: 1,

}

const preguntasNivel1 = [

    {
        enunciado: "¿Quién pintó 'Las meninas'?",
        opciones: ["A. Salvador Dalí ", "B. Diego Velázquez ", "C. Leonardo Da Vinci",],
        respuestaCorrecta: "B",
    },

    {
        enunciado: "¿Cuál es la capital de Hungría?",
        opciones: ["A. París ", "B. Roma ", "C. Budapest ",],
        respuestaCorrecta: "C",
    },

    {
        enunciado: "¿Cuántos huesos tiene el cuerpo humano?",
        opciones: ["A. 100 ", "B. 35 ", "C. 208 ",],
        respuestaCorrecta: "C",
    },

    {
        enunciado: '¿Quien escribio "la odisea"?',
        opciones: ["A. Sócrates", "B. Homero ", "C. Platón",],
        respuestaCorrecta: "B",
    },

    {
        enunciado: "¿Cuál es la capital de Argentina?",
        opciones: ["A. La Plata", "B. Buenos Aires ", "C. Springfield",],
        respuestaCorrecta: "A",
    },

    {
        enunciado: "¿De qué color es el caballo blanco de San Martin?",
        opciones: ["A. Verde Flúo ", "B. Blanco", "C. Transparente",],
        respuestaCorrecta: "B",
    },

    {
        enunciado: "¿Cuantos lados tiene un triángulo?",
        opciones: ["A. 1 ", "B. 2 ", "C. 3",],
        respuestaCorrecta: "C",
    },

    {
        enunciado: "¡Elegí la opcion C y ganas!",
        opciones: ["A. la c ", "B. la c ", "C. ¿Será ésta la c?",],
        respuestaCorrecta: "C",
    },

    {
        enunciado: "¿Cuantas patas tiene un caracol?",
        opciones: ["A. 1 ", "B. 0 ", "C. 4 ",],
        respuestaCorrecta: "B",
    },

    {
        enunciado: "¿En donde se encuentra ?",
        opciones: ["A. Desaprueba ", "B. Aprueba ", "C. Va al top 10 derecho",],
        respuestaCorrecta: "C",
    },
    {
        enunciado: "¿Qué puntaje se va a sacar Flor en este trabajo?",
        opciones: ["A. Desaprueba ", "B. Aprueba ", "C. Va al top 10 derecho",],
        respuestaCorrecta: "C",
    },
    {
        enunciado: "¿Qué puntaje se va a sacar Flor en este trabajo?",
        opciones: ["A. Desaprueba ", "B. Aprueba ", "C. Va al top 10 derecho",],
        respuestaCorrecta: "C",
    },

    {
        enunciado: "¿Qué puntaje se va a sacar Flor en este trabajo?",
        opciones: ["A. Desaprueba ", "B. Aprueba ", "C. Va al top 10 derecho",],
        respuestaCorrecta: "C",
    },
    {
        enunciado: "¿Qué puntaje se va a sacar Flor en este trabajo?",
        opciones: ["A. Desaprueba ", "B. Aprueba ", "C. Va al top 10 derecho",],
        respuestaCorrecta: "C",
    },
    {
        enunciado: "¿Qué puntaje se va a sacar Flor en este trabajo?",
        opciones: ["A. Desaprueba ", "B. Aprueba ", "C. Va al top 10 derecho",],
        respuestaCorrecta: "C",
    },
]


function chequearRespuesta(respuestaSeleccionada, respuestaCorrecta) {

    if (respuestaSeleccionada == respuestaCorrecta) {
        return true;
    } else { return false; }
}



function asignarPuntos(respuestaSeleccionada, respuestaCorrecta) {
    if (chequearRespuesta(respuestaSeleccionada, respuestaCorrecta)) {
        jugador.puntos++;
    }
}

const niveles = [
    { nombre: "Nivel 1", puntosRequeridos: 5 },
    { nombre: "Nivel 2", puntosRequeridos: 10 },
    /* { nombre: "Nivel 3", puntosRequeridos: 30 },
    { nombre: "Nivel 4", puntosRequeridos: 40 },
    { nombre: "Nivel 5", puntosRequeridos: 50 },
    { nombre: "Nivel 6", puntosRequeridos: 60 },
    { nombre: "Nivel 7", puntosRequeridos: 70 }, */
];


// Función para determinar en qué nivel se encuentra el jugador
function determinarNivel(puntos, x) {
    for (let i = 0; i < niveles.length -1; i++) {
        if (puntos >= niveles[i].puntosRequeridos) {
            x = jugador.nivelActualJugador++;
            return x;
        }break;
    }
}


// pedir al usuario que ingrese su nombre y moficiarlo en el objeto.

jugador.nombre = prompt("ingrese su nombre de Jugador");

console.log(`  ${jugador.nombre}, BIENVENIDO`);


//Inicializar el juego en el nivel 1:
let nombreJugador = document.querySelector("#nombreJugador").textContent = `${jugador.nombre}`;
let nivelJugador = document.querySelector("#nivelJugador").textContent = `Nivel ${jugador.nivelActualJugador}`;
/* let muestraPregunta = document.querySelector('#muestraPregunta').textContent = enunciado.enunciado; 

let muestraOpciones = document.querySelector('#muestraOpciones').textContent = enunciado.opciones; */



console.log(nombreJugador);
console.log(nivelJugador);





while (jugador.nivelActualJugador <= niveles.length-1) {
    for (const enunciado of preguntasNivel1) {
        console.log(enunciado.enunciado);
        console.log(enunciado.opciones);

        let respuestaSeleccionada = prompt("Ingrese su respuesta en letras MAYÚSCULAS: ");

        if (chequearRespuesta(respuestaSeleccionada, enunciado.respuestaCorrecta)) {
            console.log("¡RESPUESTA CORRECTA!");
            asignarPuntos(respuestaSeleccionada, enunciado.respuestaCorrecta);
            console.log(`Hasta el momento tienes ${jugador.puntos} puntos`);
            determinarNivel(jugador.puntos,jugador.nivelActualJugador);

            console.log(`Tu nivel actual es: ${jugador.nivelActualJugador}`);
        } else {
            console.log("Respuesta INCORRECTA");
            console.log(`Hasta el momento tienes ${jugador.puntos} puntos`);
        }

        if (jugador.nivelActualJugador > niveles.length) {
            break;
        }
    }
}
//En este código, hemos usado un while para controlar el progreso del juego y asegurarnos de que se detenga cuando el jugador alcance el último nivel disponible.

















