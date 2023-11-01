
const jugador = {
    nombre: "",
    puntos: 0,
};




const preguntasCategoria1 = [

    {
        enunciado: "¿Quién pintó el famoso cuadro 'La Noche Estrellada'?",
        opciones: ["Salvador Dalí ", "Diego Velázquez ", "Leonardo Da Vinci", "Vincent Van Gogh"],
        respuestaCorrecta: "Vincent Van Gogh",
    },

    {
        enunciado: "¿Quién escribió 'El origen de las especies'?",
        opciones: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Galileo Galilei"],
        respuestaCorrecta: "Charles Darwin",
    },

    {
        enunciado: "¿Quién fue el líder de la Revolución Rusa de 1917?",
        opciones: ["Vladimir Putin", "Joseph Stalin", "León Trotsky", "Vladimir Lenin"],
        respuestaCorrecta: "Vladimir Lenin",
    },

    {
        enunciado: '¿En qué año se produjo la revolución francesa?',
        opciones: ["1776", "1789", "1799", "1812"],
        respuestaCorrecta: "1789",
    },

    {
        enunciado: "¿Cuál de los siguientes líderes no estuvo involucrado en la Segunda Guerra Mundial?",
        opciones: ["Winston Churchill", "Adolf Hitler", "Frankling Roosevelt", "Napoleon Bonaparte"],
        respuestaCorrecta: "Napoleon Bonaparte",
    },

    {
        enunciado: "¿Qué imperio fue gobernado por Julio César?",
        opciones: ["Imperio Persa", "Imperio Griego", "Imperio Romano", "Imperio Mongol"],
        respuestaCorrecta: "Imperio Romano",
    },

    {
        enunciado: "¿Cuál es la unidad básica de la herencia y la genética?",
        opciones: ["átomo", "gen", "Molécula", "celula"],
        respuestaCorrecta: "gen",
    },

    {
        enunciado: "¿Cuál es la fuerza que atrae a todos los objetos hacia la Tierra?",
        opciones: ["Magnetismo", "Gravedad", "Electricidad", "Fricción"],
        respuestaCorrecta: "Gravedad",
    },

    {
        enunciado: "¿Cuál es el proceso por el cual los seres vivos se desarrollan a partir de una sola célula?",
        opciones: ["Mitosis", "Meiosis", "fecundación", "Celula Madre"],
        respuestaCorrecta: "Celula Madre",
    },


];

let indiceArrayPreguntas = 0;

let cantidadDeRespuestasAcertadas = 0;

document.getElementById("pantallaJuego").style.display = "none";
document.getElementById("pantallaFinal").style.display = "none";

document.querySelector("#puntosObtenidos").textContent = cantidadDeRespuestasAcertadas

function capturarNombreJugador() {
    let contenidoInput = document.querySelector("#nombreIngresadoJugador");

    document.querySelector(".nombreJugador").textContent = contenidoInput.value;

}




function limpiarOpciones() {
    document.getElementById("opcion0").classList.remove("nombreAcertada");
    document.getElementById("opcion1").classList.remove("nombreAcertada");
    document.getElementById("opcion2").classList.remove("nombreAcertada");
    document.getElementById("opcion3").classList.remove("nombreAcertada");
    document.getElementById("opcion0").classList.remove("nombreNoAcertada");
    document.getElementById("opcion1").classList.remove("nombreNoAcertada");
    document.getElementById("opcion2").classList.remove("nombreNoAcertada");
    document.getElementById("opcion3").classList.remove("nombreNoAcertada");
    document.getElementById("opcion0").classList.add("btn");
    document.getElementById("opcion1").classList.add("btn");
    document.getElementById("opcion2").classList.add("btn");
    document.getElementById("opcion3").classList.add("btn");

}



function mostrarPregunta(indiceArrayPreguntas) {
    if (preguntasCategoria1.length <= indiceArrayPreguntas) {
        terminarJuego();
    } else {
        limpiarOpciones();
        let preguntaActual = preguntasCategoria1[indiceArrayPreguntas].enunciado;
        let elementoPregunta = document.querySelector("#pregunta");

        elementoPregunta.textContent = preguntaActual;

        let elementoOpcion0 = document.querySelector("#opcion0");
        let elementoOpcion1 = document.querySelector("#opcion1");
        let elementoOpcion2 = document.querySelector("#opcion2");
        let elementoOpcion3 = document.querySelector("#opcion3");


        elementoOpcion0.textContent = preguntasCategoria1[indiceArrayPreguntas].opciones[0];
        elementoOpcion1.textContent = preguntasCategoria1[indiceArrayPreguntas].opciones[1];
        elementoOpcion2.textContent = preguntasCategoria1[indiceArrayPreguntas].opciones[2];
        elementoOpcion3.textContent = preguntasCategoria1[indiceArrayPreguntas].opciones[3];
    }

}





function comenzarJuego() {

    preguntaActual = 0;
    cantidadDeRespuestasAcertadas = 0;


    document.getElementById("pantallaFinal").style.display = "none";
    document.getElementById("pantallaDeBienvenida").style.display = "none";

    document.getElementById("pantallaJuego").style.display = "block";
    for (const pregunta of preguntasCategoria1) {
        mostrarPregunta(indiceArrayPreguntas);
    }

}

//ChequearRespuesta

function chequearRespuesta(eleccion) {
    let preguntaActual = preguntasCategoria1[indiceArrayPreguntas];

    if (preguntaActual.opciones[eleccion] == preguntaActual.respuestaCorrecta) {
        document.getElementById("opcion" + eleccion).className = "nombreAcertada";
        cantidadDeRespuestasAcertadas++;
        document.querySelector("#puntosObtenidos").textContent = cantidadDeRespuestasAcertadas
    } else {
        document.getElementById("opcion" + eleccion).className = "nombreNoAcertada";
    }
    indiceArrayPreguntas++;
    setTimeout(() => mostrarPregunta(indiceArrayPreguntas), 1000);
}




function volverAlInicio() {
    document.getElementById("pantallaDeBienvenida").style.display = "block";
    document.getElementById("pantallaJuego").style.display = "none";
    document.getElementById("pantallaFinal").style.display = "none";
}


function terminarJuego() {

    document.getElementById("pantallaJuego").style.display = "none";
    document.getElementById("pantallaFinal").style.display = "block";
}


/*

funciones que necesito


-comprobar respuesta

-cargar preguntas y opciones (falta bucle)


-comenzar juego
-terminar juego

- limpiar opciones

-volver al inicio





*/