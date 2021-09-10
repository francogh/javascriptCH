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


// let tabla = parseInt(prompt('ingrese un numero'));



// for (let index = 0; index <= 5; index++) {
//    let resultado = tabla * index;
//     console.log(tabla + 'x'  + index + ' es igual a: ' + resultado);
    
//     if(resultado != 0){
//         if(resultado % 2 == 0) {
//             console.log(resultado + ' es un numero par');
//         }
//         else {
//             console.log(resultado + ' es un numero impar');
//         }
//     }
// }


// let contraseña = prompt('ingrese su contraseña');
// let intentos = 3;


// while(contraseña !== 'ESC'){
    
//     if (intentos >=1) {
//         console.log('Contraseña incorrecta, le quedan: ' + intentos + ' intentos');

//     }else{
//         console.log('ya no le quedan mas intentos');
//         break;
//     }
    
//     contraseña = prompt('ingrese una nueva contraseña')
//     intentos = intentos -1;

// }

 
// ENTREGABLE 4

// let ingresoMensual = parseInt(prompt("INGRESE SU ESTIMADO MENSUAL"));



function guardarDinero(){
    
    let ingresarDinero = parseFloat(document.getElementById('ingresoAdicional').value);
    let saldoAcumulado = parseFloat(document.getElementById('saldoTotal').value);
    
    //verifico que el campo no este vacio
    if (ingresarDinero == 0 || ingresarDinero == '') { 
        alert ('El campo no puede estar vacio ni en 0');
    }else{
    //sumo dinero ingresado a saldo
    document.getElementById('saldoTotal').value = ingresarDinero + saldoAcumulado;
    document.getElementById('ingresoAdicional').value = 0;
    }

   
}

function guardarGasto(){
    
    const sacarDinero = parseFloat(document.getElementById('dineroGastado').value); //dato dinero a restar
    const saldoAcumulado = parseFloat(document.getElementById('saldoTotal').value); //datos saldo
    //verifico que el campo no este vacio
    if (sacarDinero == 0 || sacarDinero == '') {
        alert ('El campo no puede estar vacio ni en 0');
    }else{
        //resto dinero ingresado a saldo
        document.getElementById('saldoTotal').value = saldoAcumulado - sacarDinero;
        document.getElementById('dineroGastado').value = 0;
    }
    }
    
    window.onload = function(){
        var fecha = new Date(); //Fecha actual
        var mes = fecha.getMonth()+1; //obteniendo mes
        var dia = fecha.getDate(); //obteniendo dia
        var ano = fecha.getFullYear(); //obteniendo año
        var horaHoy = new Date(); //Hora Actual
        var hora = horaHoy.getHours(); //obtener hora
        var minutos = horaHoy.getMinutes(); //obteniendo minutos

        if(dia<10)
          dia='0'+dia; //agrega cero si la hora menor de 10
        if(mes<10)
          mes='0'+mes //agrega cero si los minutos menor de 10
        document.getElementById('fechaActual').value=ano+"-"+mes+"-"+dia;

        
        if(hora<10)
          hora='0'+hora; //agrega cero si el menor de 10
        if(minutos<10)
          minutos='0'+minutos //agrega cero si el menor de 10
        document.getElementById('horaActual').value=hora+":"+minutos;
      }
    
    



// const ingresoExtraordinario = (ingreo, saldo) => {
//     return ingreso + saldo;
// }

// const gastoSalida = (saldo, egreso) => {
//     return saldo - egreso;
// }

