// ENTREGA Nº1

// let nombre = prompt('ingrese su nombre');


// console.log (nombre);

// let nombre = prompt('Ingrese su nombre');
// alert('Hola' + ' ' + nombre);

// let edad = prompt('Ingrese su edad');
// let edadInt = parseInt(edad);

// let anioActual = 2021;

// console.log('Tu nombre es ' + nombre + ' ' +'y naciste en el año' + ' ' + (anioActual - edadInt));



// ENTRAGA Nº 2


alert('Hola, este sistema podra decirte si puede jubilarte');
let nombre = prompt('Cual es tu nombre?');
alert('Hola ' + ' ' + nombre);
let edad = prompt (nombre + ' '+ 'cual es tu edad?');
let sexo = prompt ('Por favor coloca tu sexo \nM para masculino \nF para femenino');


if (nombre != '' && edad != '' && sexo != '')  {
    if (((edad >= 60) && (sexo == 'F' || 'f') ) || ((edad >= 65) && (sexo == 'M' || 'm'))){
        if (sexo = 'M') {
            alert('Puedes jubilarte por ser mujer y tener 60 años o mas')
        }else{
            alert('Puedes jubilarte por ser hombre y tener 65 años o mas')
        }
    
    }else{
        alert('No cumples con la edad necesaria para poder jubilarte');
        console.log('Seguí laburando');
    }
}else{
    alert ('No se pudo realizar la consulta \ntodos los campos deben completarse');
    console.log('Sigue laburando');
}
