
/***************************************** ALGORITMO UTILIZANDO CONDICIONALES ******************************************/

//CREAR USUARIO:

//introducir nombre de usuario

let usuarioNuevo;

do {
    usuarioNuevo = prompt("Ingrese su nombre de usuario:");

    if (usuarioNuevo === null) {
        alert("Se ha cancelado la entrada. Por favor, ingrese un nombre de usuario.");
    } else if (usuarioNuevo === "") {
        alert("No ha ingresado ningún nombre de usuario. Por favor, ingrese un nombre de usuario válido.");
    }
} while (usuarioNuevo === null || usuarioNuevo === "");

alert(`El nombre de usuario ingresado es: ${usuarioNuevo}`);


//introducir e-mail

let emailNuevo;

do {
    emailNuevo = prompt("Ingrese su correo electrónico:");

    if (emailNuevo === null) {
        alert("Se ha cancelado la entrada. Por favor, ingrese un correo electronico.");
    } else if (emailNuevo === "") {
        alert("No ha ingresado ningún correo. Por favor, ingrese un correo electrónico válido.");
    }
} while (emailNuevo === null || emailNuevo === "");

alert(`El nombre de usuario ingresado es: ${emailNuevo}`);


// repetir e-mail: 

let emailIngresado;

do {
    emailIngresado = prompt("ingrese nuevamente su correo electronico");

    if (emailNuevo === emailIngresado) {
        alert("Los e-mails coinciden")
    } else if (emailIngresado === "") {
        alert("No ha ingresado ningún correo. Por favor, ingrese nuevamente su correo electrónico.");
    }
} while (emailIngresado === null || emailNuevo === "");



// intruducir contraseña nueva:

let passwordNuevo;

do {
    passwordNuevo = prompt("Ingrese una contraseña nueva");

    if (passwordNuevo === null) {
        alert("Se ha cancelado la entrada. Por favor, ingrese una contraseña nueva.");
    } else if (passwordNuevo === "") {
        alert("No ha ingresado ningún correo. Por favor, ingrese una contraseña válida.");
    }
} while (passwordNuevo === null || passwordNuevo === "");


alert("usuario creado correctamente");


//LOG IN

//pide nombre de usuario

let nombreDeUsuario = prompt("ingrese su nombre de usuario");

if (nombreDeUsuario == usuarioNuevo) {
    alert("usuario ingresado correctamente");
} else if (nombreDeUsuario != usuarioNuevo) {
    for (let i = 3; i >= 0; i--) {
        nombreDeUsuario = prompt("ingrese un usuario válido");
    }

}



// pide ingreso de contraseña

let passwordUsuario = prompt("ingrese su contraseña");

if (passwordUsuario == passwordNuevo) {
    alert(" El acceso a su cuenta es exitoso");
} else if (passwordUsuario != passwordNuevo) {
    for (let i = 3; i >= 0; i--) {
        passwordUsuario = prompt("Oops! es incorrecta, por favor ingrese nuevamente su contraseña");
        if ((i == 0) && (passwordUsuario != passwordNuevo)) {
            alert("Su cuenta ha sido bloqueada por su seguridad. Por favor no haga nada, no hay nadie disponible que arregle este problema")
        }

    }

}






/******************************************** ALGORITMO UTILIZANDO CICLOS **********************************************/

//Imprime los números pares en un rango de valores dado por el usuario 

let primerValor = parseInt(prompt("ingrese el primer valor del rango asi chequeo los numeros pares"));
let segundoValor = parseInt(prompt("ingrese el segundo valor del rango"));



for (let i = primerValor; i <= segundoValor; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//escribe los numeros de forma descendente de un valor que ingrese el usuario hasta llegar a 0

let numero = parseInt(prompt("ingrese su numero"));

for (let i = numero; i >= 0; i--) {
    console.log(i);
}


/********************************************** SIMULADOR INTERACTIVO ************************************************/



/*  Esta aplicacion pide al usuario ingresar la distancia de un recorrido que quiera realizar.
Con esta información, el simulador calcula cuánto tiempo tardaría en completar 
el recorrido en distintos medios de transporte: 

Las velocidades de los medio de transporte estan calculadas de la siguiente manera:

 -	caminando: 5 km/ hr
 -	bicicleta : 10 km/ hr
 -	auto : 50 km/hr en el caso que sea una distancia menor a 100 Km. 
    De lo contrario la velocidad aumenta a 100km/hr desde el inicio del recorrido.

Al finalizar el simulador imprime por medio de una alerta el tiempo estimado
que calcula sobre la distancia y el medio de transporte seleccionado

*/





// 1) pedir al usuario que ingrese la distancia que va a recorrer.

let distancia = parseInt(prompt("ingrese la distancia que quiere recorrer en kilometros"));

// 2) pedir al usuario que ingrese el modo de transporte que va a tomar.

let transporte = prompt(" ingrese el medio de transporte en el cual se va a trasladar las opciones son: caminando, bicicleta, auto");

// 3) calcular el tiempo que va a tardar expresado en minutos.

function calcularTiempoDeTraslado(distancia, transporte) {
    switch (transporte) {
        case "caminando":
            tiempoEstimado = (distancia * 60) / 5;
            return tiempoEstimado;
            break;
        case "bicicleta":
            tiempoEstimado = (distancia * 60) / 10;
            return tiempoEstimado;
            break;
        case "auto":

            if (distancia > 100) {

                tiempoEstimado = (distancia * 60) / 100;
                return tiempoEstimado;
            }

            else if (distancia <= 100) {
                tiempoEstimado = (distancia * 60) / 50;
            }
            return tiempoEstimado;
            break;
        default: "por favor ingrese datos validos";
            break
    }

}



// 4) transformar el resultado en hs y minutos. 

function muestraHorasMinutos(tiempo) {
    if (tiempo / 60 == 1) {
        return "1 Hora";

    } else if (tiempo > 60) {

        let horas = tiempo / 60; // (-> me devuelve valor expresado en hs ej: 4.5)

        let minutos = tiempo % 60; // (-> me devuelve valor expresado en minutos ej: 54) 

        horas = horas - (minutos / 60); //resta los minutos sobrantes para que me devuelva horas enteras

        return `${horas} horas, ${minutos} minutos`;

    } else if (tiempo < 60) {
        return `0 horas, ${tiempo} minutos`;

    }

}

// 5) imprimir con alert el resultado.

let tiempoDeTraslado = calcularTiempoDeTraslado(distancia, transporte);

alert(`si usted recorre ${distancia} kms en ${transporte} el tiempo estimado es de ` + muestraHorasMinutos(tiempoDeTraslado));
