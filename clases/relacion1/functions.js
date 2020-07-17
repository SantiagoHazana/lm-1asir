function suma(num1, num2, num3){
    return num1+num2+num3;
}

function media(num1, num2, num3, num4, num5){
    return (num1+num2+num3+num4+num5)/5;
}

function cuadrado(num1){
    return num1*num1;
}

function operaciones(num1, num2){
    console.log('Suma: ' + (num1 + num2));
    console.log('Resta: ' + (num1 - num2));
    console.log('Multiplicacion: ' + (num1 * num2));
    console.log('Division: ' + (num1/num2).toFixed(2));
}

function sueldo(horas, precio, irpf){
    return ((horas*precio)-(horas*precio*irpf/100));
}