// Cambiar el color del primer parrafo a uno aleatorio
function modificar(){
    var r = Math.floor(Math.random() * 256); // 55
    var g = Math.floor(Math.random() * 256); // 163
    var b = Math.floor(Math.random() * 256); // 201
    document.getElementsByTagName('p')[0].style.color = 'rgb('+r+','+g+','+b+')'; // rgb(55,163,201)
}

function modificarTodosP(){
    var p = document.getElementsByTagName('p');

    for(var i = 0; i < p.length; i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        p[i].style.color = 'rgb('+r+','+g+','+b+')';
    }
}

function modificarP(id){
    document.getElementById(id).style.color = 'Red';
}