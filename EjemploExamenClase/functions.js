
function sumCuadDig(num){
    num = parseInt(num);
    var total = 0;
    
    while (num!==0){
        total += Math.pow((num%10), 2);
        num = Math.trunc(num/10);
    }
    return total;
}

function desbordado(num){
    return sumCuadDig(num)>num;
}

function allDesbordados(num){
    var result = '';
    for(var i = 1; i <= num; i++)
        if (desbordado(i))
            result += i + ', ';

    return result;
}


function totalFruits(peras, manzanas, fresas, sandia){
    var precioPeras = 3;
    var precioManzanas = 2.5;
    var precioFresas = 4;
    var precioSandia = 1;
    var precioEnvio = 5;
    var kgDescuento = 5;

    var finalPeras = calculatePrice(peras, precioPeras, kgDescuento);
    var finalManzanas = calculatePrice(manzanas, precioManzanas, kgDescuento);
    var finalFresas = calculatePrice(fresas, precioFresas, kgDescuento);
    var finalSandias = calculatePrice(sandia, precioSandia, kgDescuento);
    var precioTotal = finalPeras + finalManzanas + finalFresas + finalSandias + precioEnvio;

    var result = document.getElementById('r2');
    result.innerHTML += '<strong><em>Su pedido:</em></strong> <br>';
    result.innerHTML += '<strong>Peras: </strong>' + peras + 'kg x ' + precioPeras + '€ = ' + finalPeras + '€ <br>';
    result.innerHTML += '<strong>Manzanas: </strong>' + manzanas + 'kg x ' + precioManzanas + '€ = ' + finalManzanas + '€ <br>';
    result.innerHTML += '<strong>Fresas: </strong>' + fresas + 'kg x ' + precioFresas + '€ = ' + finalFresas + '€ <br>';
    result.innerHTML += '<strong>Sandia: </strong>' + sandia + 'kg x ' + precioSandia + '€ = ' + finalSandias + '€ <br>';
    result.innerHTML += '<strong>Total = </strong>' + precioTotal + '€';
    
}

function calculatePrice(kg, price, kgDescuento){
    if(kg >= kgDescuento)
        return calculateDiscount(kg*price, 10);
    
    return kg*price;
}

function calculateDiscount(value, discount){
    return value * (1 - (discount/100));
}

var albumCount = 0;

function agregarAlbum(grupo, titulo){
    if(grupo.length == 0 || titulo.length == 0){
        document.getElementById('check').innerHTML = 'Por favor rellene todos los campos';
    }else{
        albumCount++;
        document.getElementById('check').innerHTML = '';
        var pChat = document.getElementById('list');
        pChat.innerHTML += '<strong>' + albumCount + '. ' + grupo + '</strong>' + ': ' + titulo + '<br>';
    }
}

function limitCharacters(text, limit){
    return text.length <= limit;
}









