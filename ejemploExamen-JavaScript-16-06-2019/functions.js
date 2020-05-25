
function curioso(number){
    var result = (parseInt(number)**2).toString();
    
    if(result.substring(result.length - number.length) == number)
        return true;
    
    return false;
}

function printCurioso(number){
    var result = '';

    for(var i = 2; i <= parseInt(number); i++){
        if(curioso(i.toString()))
            result += i + ' - ';
    }
    return result.substring(0, result.length-2);
}

function calculateNomina(sueldo, antiguedad){
    sueldo = parseInt(sueldo);
    antiguedad = parseInt(antiguedad);
    if(sueldo < 500 && antiguedad >= 10)
        return sueldo * 1.2;
    else if (sueldo < 500)
        return sueldo * 1.05;
    
    return sueldo;
}

function chat(user, message){
    if(user == 'default' || message.length == 0){
        document.getElementById('check').innerHTML = 'Por favor rellene todos los campos';
        console.log('rechazado');
    }else{
        document.getElementById('check').innerHTML = '';
        var pChat = document.getElementById('chat');
        pChat.innerHTML += '<strong>'+ user + '</strong>' + ': ' + message + '<em> at </em>' + giveTime() + '<br>';
    }
}

function giveTime(){
    var date = new Date();

    return (date.getHours() < 10 ? '0':'') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0':'') + date.getMinutes();
}

function limitCharacters(text, limit){
    return text.length <= limit;
}