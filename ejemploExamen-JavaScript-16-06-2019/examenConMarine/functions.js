function chat(mensaje, usuario){
    var nuevoMsj = document.createElement('p');
    nuevoMsj.innerHTML = usuario + ': ' + mensaje;
    document.getElementById('chat').appendChild(nuevoMsj);
}

function agregarUsuario(){
    var nuevoUsr = document.createElement('option');
    var nombre = prompt('Nuevo usuario');
    nuevoUsr.value = nombre;
    nuevoUsr.innerHTML = nombre;
    document.getElementById('users').appendChild(nuevoUsr);
}