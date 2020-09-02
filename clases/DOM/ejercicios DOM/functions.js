// 4. Agregar un párrafo nuevo al final del div con id=”parrafos”, ponerle un texto a elección.
function agregarP(){
    var x = document.createElement('p');
    x.innerHTML= 'hola';
    x.id = 'hola';
    document.getElementById('parrafos').appendChild(x);
}

// 6. Pedir al usuario un número y crear esa cantidad de párrafos con un 
// texto a elección de ustedes, crearlos debajo del párrafo creado en el punto 4.

function agregarVariosP(){
    var num = parseInt(prompt('Numero de parrafos a agregar'));

    for(var i = 0; i < num; i++){
        var nuevoP = document.createElement('p');
        nuevoP.innerHTML = 'ahkjfhgauper9ihaipeubhiaeurhgiauerbviehrbpw';
        document.getElementById('parrafos').appendChild(nuevoP);
    }
}

// 7. Modificar el HTML para poder identificar el párrafo creado en el punto 4 y eliminarlo.
function idYEliminar(){
    var p = document.getElementsByTagName('p')[5];
    document.getElementById('parrafos').removeChild(p);
}

// 8. Pedirle al usuario el número de fila y columna que se quiere modificar y 
// el texto a modificar, cambiar el texto de esa celda.
function modTabla(){
    var row = parseInt(prompt('Fila'));
    var col = parseInt(prompt('Columna'));
    var texto = prompt('Texto');
    document.getElementById('tabla').rows[row-1].children[col-1].innerHTML = texto;
}

//9. Agregar una opción al listado de nombres, pedir el nombre al usuario.
function agregarNombre(){
    var nuevaOp = document.createElement('option');
    nuevaOp.innerHTML = prompt('Nombre a agregar');
    nuevaOp.value = 'op' + (document.getElementById('nombres').children.length +1);
    document.getElementById('nombres').appendChild(nuevaOp);
}

//10. Eliminar todos los párrafos, uno por uno. Con un bucle
function eliminar(){
    var ps = document.getElementsByTagName('p');
    var num = ps.length;
    
    for(var i = 0; i < num; i++){
        document.getElementById('parrafos').removeChild(ps[0]);
    }
}

//10. Eliminar todos los párrafos, uno por uno. Uno a la vez
function eliminar(){
    var ps = document.getElementsByTagName('p');
    document.getElementById('parrafos').removeChild(ps[0]);
}