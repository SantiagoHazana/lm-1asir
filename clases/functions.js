var nombre;
nombre = 1;
nombre = 'nombre' + ' y apellido';

var booleano1 = true;
var booleano2 = false;

var array = [0, 1, 2, 3, 4, 5];
var nombreArray = ['n', 'o', 'm'];
var nombreAsir = ['Sara', 'Marina', 'Santiago', 'Carlos'];
var dias = ['Lunes', 'Martes', 'Miercoles'];

// Operador de asignacion =, sirve para asginar

// Operadores matematicos +, -, *, /, %

// Operadores logicos ||, &&, !

// Operadores relacionales ==, !=, >, <, >=, <=, ===

function imprimirNumeros(num){
    num = num.toString();

    for(var i = 0; i < num.length; i++){
        console.log(num[num.length - 1 - i]);
    }
}

function imprimirNumeros2(num){
    var largo = num.toString().length;

    for(var i = 0; i < largo; i++){
        console.log(num%10);
        num = parseInt(num/10);
    }
}

function suma3(num1, num2, num3){
    var resultado = num1 + num2 + num3;
    console.log(resultado);
}

function daysYear(num){
    var years = parseInt(num/365);
    num = num%365;
    var months = parseInt(num/30.4167);
    num = num%30.4167;
    var days = parseInt(num);

    console.log(years + ' años ' + months + ' meses ' + days + ' dias.')
}