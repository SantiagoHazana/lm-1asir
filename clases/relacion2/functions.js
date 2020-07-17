/*
    Relacion 2 extendida
 */

 // Ejercicio 1
function enRango(num){
    return num >= 1 && num <=10;
}

// Ejercicio 2
function posNeg(num){
    return num >= 0;
}

function posNeg2(num){
    if(num >= 0){
        return 'Positivo'
    }else{
        return 'Negativo'
    }
}

// Ejercicio 11

function parImparBucles(n1){

    var contador = 0;

    for(; n1 >= 2; contador++){
        n1 = n1 - 2;
    }

    if (n1 == 0){
        console.log('El numero es par');
        return true;
    }else{
        console.log('El numero es impar');
        return false;
    }
}

// Ejercicio 15

function ej15(){
    var numeros = [];
    var num = parseInt(prompt('Introduce un número'));

    while (num != 0){
        numeros.push(num);
        num = parseInt(prompt('Introduce un número'));
    }
    console.log('Minimo = ' + minimo(numeros) + ' Máximo = ' + maximo(numeros));

}

function minimo(arrayNum){
    var min = arrayNum[0];

    for(var i = 1; i < arrayNum.length; i++){
        if(arrayNum[i] < min){
            min = arrayNum[i];
        }
    }
    return min;
}

function maximo(arrayNum){
    var min = arrayNum[0];

    for(var i = 1; i < arrayNum.length; i++){
        if(arrayNum[i] > min){
            min = arrayNum[i];
        }
    }
    return min;
}

// Ejercicio 16

function restas(n1, n2){
    var contador = 0;

    for(; n1 > 0; contador++){
        n1 = n1 - n2;
    }

    console.log(contador);
}

// Ejercicio 17
// Introducir números por teclado y contar los positivos y los negativos.
// El programa termina cuando se introduce un cero y muestra los resultados.

function posYNeg(){
    var num = parseInt(prompt('Introduce un numero'));
    var pos = 0;
    var neg = 0;

    while(num != 0){
        if(num > 0)
            pos++;
        else
            neg++;

        num = parseInt(prompt('Introduce un numero'));
    }

    console.log('Numeros positivos: ' + pos + ' Numeros negativos: ' + neg);
}

function posYNeg2(){
    var num = parseInt(prompt('Introduce un numero'));
    var pos = [];
    var neg = [];

    while(num != 0){
        if(num > 0)
            pos.push(num);
        else
            neg.push(num);

        num = parseInt(prompt('Introduce un numero'));
    }

    console.log('Numeros positivos: ' + pos.toString() + ' ' + pos.length + ' Maximo positivo: '+ Math.max(...pos) 
                + ' Numeros negativos: ' + neg.toString() + ' ' + neg.length + ' Maximo negativo: '+ Math.max(...neg));
}

// Ejercicio 24
/*
    Programa que calcule el factorial de un número introducido por teclado, sabiendo
    que la fórmula del factorial el factorial (n) = n * factorial (n-1).
    Ej: 5! = 5*4*3*2*1 = 120
*/
function factorial(num){
    var resultado = 1;

    while(num>=1){
        resultado = resultado * num;
        num = num - 1;
    }

    return resultado;
}

function factorial2(num){
    if(num == 1)
        return 1;
    
    return num * factorial2(num-1);
}