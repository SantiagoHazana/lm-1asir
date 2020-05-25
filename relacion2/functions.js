function palindrome(word){
    word = word.toLowerCase();
    for(var i = 0; i < word.length/2; i++){
        if(word[i] != word[word.length -1 -i]){
            return false;
        }
    }
    return true;
}

function hackText(text){

    text = text.replace(/A/gi, '4');
    text = text.replace(/E/gi, '3');
    text = text.replace(/I/gi, '1');
    text = text.replace(/O/gi, '0');
    
    return text;
}

function palindromePhrase(phrase){
    phrase = phrase.toLowerCase();

    phrase = phrase.replace(/\s/g, '');

    return palindrome(phrase);
}

function successiveDivisions(dividend, divisor){
    var rest = 0;
    while (dividend>=divisor){
        dividend -= divisor;
        rest++;
    }
    console.log(rest);
    return rest;
}

function checkPositive(number){
    return number>0;
}

function exercise18(first, second){
    var result = '';

    if(first <= second){
        while (first <= second){
            result += first + '^2 = ' + Math.pow(first, 2) + '<br>';
            first++;
        }
    }else{
        while (first >= second){
            result += second + '^2 = ' + Math.pow(second, 2) + '<br>';
            second++;
        }
    }
    return result;
}

function exercise19(first, second){
    var result = 0;

    for (var i = 0; i < second; i++){
        result += first;
    }
    return result;
}

function exercise20(){
    var result = '';

    for(var i = 0; i < 5 ; i++){
        var temp = '';
        for(var j = 1; j <= 20; j++){
            temp += j + ', ';
        }
        temp = temp.substr(0, temp.length-2) + '<br>';
        result += temp;
    }
    return result;
}

function exercise21(number){
    for(var i = 2; i < number; i++){
        if(number%i == 0)
            return false;
    }
    return true;
}

function exercise22(number){
    var result = '';

    for(var i = 1; i <= 10; i++){
        result += number + ' * ' + i + ' = ' + (number*i) + '<br>';
    }
       

    return result;
}

function exercise23(repet, phrase){
    var result = '';

    for(var i = 0; i < repet; i++)
        result += phrase + '<br>';
    
    return result;
}

function factorial(number){
    if (number == 1) return 1;
    
    return number*factorial(number-1);
}

function exercise25(price){
    var result = '';
    var discount1529 = price - (price*10/100);
    var discount3049 = price - (price*15/100);
    var discount50 = price - (price*20/100);
    var priceUnit = '€/u <br>'

    result += '1-14 unidades: ' + price + priceUnit;

    result += '15-29 unidades: ' + discount1529 + priceUnit;

    result += '30-49 unidades: ' + discount3049 + priceUnit;

    result += '50 o mas unidades: ' + discount50 + priceUnit;

    return result;

}

function exercise26(n1, n2){
    return n2%n1 == 0;
}
