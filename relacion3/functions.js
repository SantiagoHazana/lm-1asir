function potencia(base, exponente){
    var result = 1;

    for(var i = 0; i<exponente; i++){
        result *= base;
    }

    return result;
}

function par(num){
    if(num%2 == 0)
        return true;
    else
        return false;
}

function sueldo(hours, price, irpf){
    return hours*price - (hours*price*irpf/100);
}

function factura(price, units, discount){
    var totalWithDiscount = price*units - (price*units*discount/100);
    var totalWithIva = totalWithDiscount + (totalWithDiscount*21/100);
    return  totalWithIva.toFixed(2);
}

function convertir(celsius){
    return ((9/5)*celsius+32).toFixed(2);
}

function mayor(num1, num2){
    return num1 > num2 ? num1 : num2;
}

function primo(num){
    for(var i = 2; i < num; i++){
        if(num%i == 0)
            return false;
    }
    return true;
}

function area(radio){
    return (Math.PI * potencia(radio,2)).toFixed(2);
}

function divisores(num){
    var result = 'Divisores de ' + num + ' son ';

    for(var i = 1; i <= num; i++){
        if(num%i ==0)
            result += i + ', ';
    }

    return result.slice(0, result.length-2);
}

function factorial(number){
    if (number == 1) return 1;
    
    return number*factorial(number-1);
}

function contar(num){
    var result = 0;
    num = num.toString();
    for(var i = 0; i < num.length; i++)
        result += parseInt(num[i]);

    return result;
}

function binario(num){
    return num.toString(2);
}

function binario2(num){
    var binaryResult = "";
 
    while(num > 0){
        if(num % 2 == 0){
            binaryResult = "0" + binaryResult;
        }
        else {
            binaryResult = "1" + binaryResult;
        }

        num = Math.floor(num / 2);
    }

    return binaryResult;
}

function toOtherBase(num, base){
    var res = "";

    while(num > 0){
        res = num % base + res;
        num = Math.floor(num / base);
    }

    return res;
}