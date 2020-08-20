
// Introduce tres números y calcula la suma.
function suma(num1, num2, num3){

    var suma = num1+num2+num3;

    return suma;
}

// Introduce cinco números en cajas de texto y calcula la media.
function media(num1, num2, num3, num4, num5){
    return (num1+num2+num3+num4+num5)/5;
}

function cuadrado(num1){
    return num1**2;
}

// 
function operaciones(num1, num2){
    console.log('Suma: ' + (num1 + num2));
    console.log('Resta: ' + (num1 - num2));
    console.log('Multiplicacion: ' + (num1 * num2));
    console.log('Division: ' + (num1/num2).toFixed(2));
}

function sueldo(horas, precio, irpf){
    return ((horas*precio)-(horas*precio*irpf/100));
}

// Leer un número de cuatro cifras y descomponer en unidades, 
// decenas, centenas y millares.

function descomponer(num){
    var resultado = '';
    num = num.toString();
    if(num.length != 4){
        resultado = 'El numero no es de 4 cifras';
        return resultado;
    }

    var unidades = num[3];
    var decenas = num[2];
    var centenas = num[1];
    var millares = num[0];

    resultado = 'Unidades: ' + '<strong>' +  unidades + '</strong>' + '<br>' 
                + 'Decenas: ' + decenas + '<br>'
                + 'Centenas: ' + centenas + '<br>'
                + 'Millares: ' + millares;

    return resultado;

}

function positivo(num){
    
    num = parseFloat(num);

    if (num >= 0){
        return true;
    }else{
        return false;
    }
}

//Ejercicio 10

function ejer10(horas, precio, precioExtra, irpf){
    // si tengo mas de 160 horas, van a haber extras, (horas - 160) = las extra
    var sueldo = 0;
    if(horas > 160){
        var pagoNormal = 160 * precio;

        var horasExtra = horas-160;
        var pagoExtra = horasExtra * precioExtra;

        var pagoTotal = pagoNormal + pagoExtra;
        
        sueldo = pagoTotal - ((pagoTotal)*irpf/100);
        
        return sueldo;
    }else{
        var pagoNormal = horas * precio;
        
        sueldo = pagoNormal - ((pagoNormal)*irpf/100);
        
        return sueldo;
    }
}


//Ejercicio 14

function dias(dias){
    var diasOriginal = dias;

    var diasAno = 365;
    var diasMes = 30.416;

    var anos = 0;
    var meses = 0;

    // Calculo anos
    if(dias > diasAno){
        anos = parseInt(dias / diasAno);
        dias = dias - (anos*diasAno);
    }

    // Calculo meses
    if(dias > diasMes){
        meses = parseInt(dias / diasMes);
        dias = dias - (meses*diasMes);
    }

    return diasOriginal + ' son: ' + anos + ' anos, ' + meses + ' meses, ' + dias.toFixed(2) + ' dias.';
}

//Ejercicio 6

function segundos(horas, minutos, segundos){
    var segundosTotales = segundos;

    segundosTotales += (minutos*60);

    segundosTotales += (horas*60*60);

    return segundosTotales;
}