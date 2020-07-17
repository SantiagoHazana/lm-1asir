var nombre;
var apellido;
nombre = 1.4;

nombre = 'Sara';
apellido = 'Aguilera';
nombreYApellido = nombre + apellido;
// nombre = 'nombre' + ' y apellido';


var booleano1 = true;
var booleano2 = false;

var prendido = false;

var array = [0, 1, 2, 3, 4, 5];
var nombreArray = ['S', 'a', 'r', 'a'];
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

function test(numero, numero2){
    var suma;
    console.log(numero + numero2);
}

// Estructuras de flujo

// if e else if

function numPar(num){
    // si es par, devolvemos 1
    // si es impar, devolvemos -1
    // si es cero, devolvemos 0

    if (num%2 == 0){
        return 'par';
    } else if (num == 0){
        return 'cero';
    } else {
        return 'impar';
    }
}

// switch

function test2(nota){

    switch (true){
        case (nota <= 4):
            console.log('Suspenso');
            break;
        case nota <= 6:
            // otra calificacion
            break;
        case nota <= 8:
            // otra calificacion
            break;
        default:
            // mejor calificacion
            break;
    }

    if (nota <= 4){
        // algo
    }else if (nota <=6){
        //algo mas
    }else if (nota <= 8){

    }else{

    }
    
}

// Bucles

// for
// imprimir todos los valores
function bucle1(array){
    
    for (var i = 0; i < array.length; i = i + 1){
        console.log(array[i]);
    }
}

// imprimir todos nos numeros pares entre dos numeros dados, considerando los numeros dados
function bucle2(num1, num2){

    for (var i = num1; i <= num2; i++){
        if(i%2 == 0)
            console.log(i);
    }

}


// bucle while
// imprimir todos los valores de un array dado
function bucle3While(array){

    var i = 0;

    while (i < array.length){
        console.log(array[i]);
        i++;
    }
}

// imprimir todos nos numeros pares entre dos numeros dados, considerando los numeros dados, mostrando el rango dado.
function bucle4While(num1, num2){
    var i = num1;

    while (i <= num2){
        if(i%2 == 0){
            console.log(i);
        }
        i++;
    }
    console.log("Esos fueron los numeros pares del rango " + num1 + ' y ' + num2);

}

// do while
// imprimir todos los valores de un array dado
function bucle5DoWhile(array){
    var i = 0;
    do {
        console.log(array[i]);
        i++;
    }while (i < array.length);

}


function par(numero){
    if(numero%2 == 0){
        return true;
    }else{
        return false;
    }
}


function rel1Ej11(fahr){
    var centi = (fahr - 32)*5/9;
    centi = centi.toFixed(2);
    console.log(centi);
}

function rel2EEj2(num){
    // if(num >= 0){
    //     return num + ' Es positivo';
    // }else{
    //     return num + ' Es negativo';
    // }

    return num >=0 ?  num + ' Es positivo' : num + ' Es negativo';
    
}

function gastosSumados(){
    var gastos = [20, 1, 34, 15, 8, 9, 100, 10];
    var gastoTotal = 0;
    
    for (var i = 0; i < gastos.length; i++){
        gastoTotal = gastoTotal + gastos[i];
    }

    return gastoTotal;
}

// bucle loop
// imprimir los numeros entre dos numeros dados
function loooooooooooop(num1, num2){
    for(var i = 0; i <= 10; i++){
        console.log(i);
    }
}

//bucle while
//imprimir del 0 al 10
function whileLoop(){

    var i = 0;

    while(i <= 10){
        console.log(i);
        i++;
    }

}

//bucle do while
//imprimir del 0 al 10

function doWhileLoop(){

    var i = 0;
    do {
        console.log(i);
        i++;
    }while(i >= 10);

}

function rel2EEj13(){
    var suma = 0;
    var num = 0;

    do{
        num = parseInt(prompt('Introducir un numero'));
        suma = suma + num;
    }while(num != 0);
    return suma;
}

function rel2EEj13Intento2(){
    var suma = 0;
    var num = parseInt(prompt('Introducir un numero'));

    while(num != 0){
        suma = suma + num;
        num = parseInt(prompt('Introducir un numero'));
    }
    
    return suma;
}

function rel2E10(){
    var total = 0;
    var num1 = parseInt(prompt('Introducir numero'));
    var num2 = parseInt(prompt('Introducir numero'));

    for(var i = num1; i <= num2; i++){
        total += i;
    }

    return total;
}

function rel3E14(){
    var suma = 0;
    var i = 0;

    var num = parseInt(prompt('Introducir numero'));

    while (num != 0){
        i ++;
        suma += num;
        num = parseInt(prompt('Introducir numero'));
        
    }

    return suma / contador;
}

function testingg(){
    var matriz = [0,1,2,3,4];

    var contador = 0;
    for (; contador < matriz.length;) {
        console.log(matriz[contador]);
        contador = contador + 1;
    }

    contador = 0;

    while(contador < matriz.length){
        console.log(matriz[contador]);
        contador = contador + 1;
    }
}