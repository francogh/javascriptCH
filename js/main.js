// ENTREGA Nº1

// let nombre = prompt('ingrese su nombre');


// console.log (nombre);

// let nombre = prompt('Ingrese su nombre');
// alert('Hola' + ' ' + nombre);

// let edad = prompt('Ingrese su edad');
// let edadInt = parseInt(edad);

// let anioActual = 2021;

// console.log('Tu nombre es ' + nombre + ' ' +'y naciste en el año' + ' ' + (anioActual - edadInt));



// // ENTRAGA Nº 2 APORTES JUBILATORIOS


// alert('Hola, este sistema podra decirte si puede jubilarte');
// let nombre = prompt('Cual es tu nombre?');
// alert('Hola ' + ' ' + nombre);
// let edad = parseInt ( prompt (nombre + ' '+ 'cual es tu edad?'));
// let sexo = prompt ('Por favor coloca tu sexo \nM para masculino \nF para femenino');


// if ((nombre != '') && (!Number.isNaN(edad)) && (sexo != ''))  {
//     if ((edad >= 60 && (sexo == 'F' || sexo == 'f')) || (edad >= 65 && (sexo == 'M' || sexo == 'm') )) {
//         if (sexo == 'M' || sexo == 'm' ) {
//             alert('Puedes jubilarte por ser hombre y tener 60 años o mas')
//         }else{
//             alert('Puedes jubilarte por ser mujer y tener 65 años o mas')
//         }
    
//     }else if (sexo == 'f' || sexo == 'F' ) {
//         alert('No cumples con la edad necesaria, aún te faltan' + ' ' +(60 - edad) + ' ' + 'años para poder jubilarte' );
//         console.log('Sigue laburando');
//     }else if (sexo == 'm' || sexo == 'M' ) {
        
//      alert('No cumples con la edad necesaria, aún te faltan' + ' ' + (65 - edad)+ ' ' + "años para poder jubilarte" );
//      console.log('Sigue laburando');
//     }else{
//         alert ('No se pudo realizar la consulta \nalgunos de los datos ingresados son incorrectos');
//     }
// }else{
//     alert ('No se pudo realizar la consulta \ntodos los campos deben completarse');
    
// }



// ENTREGABLE 3 CICLOS


let tabla = parseInt(prompt('ingrese un numero'));



for (let index = 0; index <= 5; index++) {
   let resultado = tabla * index;
    console.log(tabla + 'x'  + index + ' es igual a: ' + resultado);
    
    if(resultado != 0){
        if(resultado % 2 == 0) {
            console.log(resultado + ' es un numero par');
        }
        else {
            console.log(resultado + ' es un numero impar');
        }
    }
}


let contraseña = prompt('ingrese su contraseña');
let intentos = 3;


while(contraseña != 'ESC'){
    
    if (intentos >=1) {
        console.log('Contraseña incorrecta, le quedan: ' + intentos + ' intentos');

    }else{
        console.log('ya no le quedan mas intentos');
        break;
    }
    
    contraseña = prompt('ingrese una nueva contraseña')
    intentos = intentos -1;

}

