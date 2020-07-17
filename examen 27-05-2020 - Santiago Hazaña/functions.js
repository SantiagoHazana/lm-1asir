
function sumaDivisores(num){
    var result = 0;

    for(var i = 0; i < num; i++){
        if(num%i == 0)
            result += i;
    }

    return result;
}

function sumaDivisoresString(num){
    var result = '';

    for(var i = 0; i < num; i++){
        if(num%i == 0)
            result += i + ' + ';
    }

    return result.substring(0, result.length-2);
}

function checkPerfect(num1, num2){
    return num1 == num2;
}


function viajeEstudios(num){

    if(num >= 100){
        return num * 65;
    }else if(num >= 50){
        return num * 70;
    }else if(num >= 30){
        return num * 95
    }

    return 4000;
}

function checkIfComplete(group, groupList, title){
    if (group.length == 0 && groupList.options[groupList.selectedIndex].value == 'default'){
        document.getElementById('errorGrupo').innerHTML = 'Por favor ingrese o seleccione un grupo.';
        document.getElementById('errorTitulo').innerHTML = '';
    }else if (title.length == 0){
        document.getElementById('errorGrupo').innerHTML = '';
        document.getElementById('errorTitulo').innerHTML = 'Por favor ingrese un titlo';
    }else if(group.length != 0 && groupList.options[groupList.selectedIndex].value != 'default'){
        document.getElementById('errorGrupo').innerHTML = 'Por favor ingrese un grupo o seleccione de la lista, no ambas opciones.';
        document.getElementById('errorTitulo').innerHTML = '';
    }else{
        if(group.length == 0){
            document.getElementById('errorTitulo').innerHTML = '';
            document.getElementById('errorGrupo').innerHTML = '';
            addAlbum(groupList.options[groupList.selectedIndex].text, title);
        }
            
        else{
            document.getElementById('errorTitulo').innerHTML = '';
            document.getElementById('errorGrupo').innerHTML = '';
            document.getElementById('errorDelete').innerHTML = '';
            addAlbum(group, title);
        }
            
    }
}

function addAlbum(group, title){

    var father = document.getElementById('list');
    father.childElementCount;
    var node = document.createElement('p');
    node.innerHTML = father.childElementCount+1 + '. <strong>' + group + '</strong> : ' + title;
    
    document.getElementById('list').appendChild(node);
}

function removeAlbum(index){
    var father = document.getElementById('list');
    var childList = father.childNodes;

    if(childList.length < index || index <=0){
        document.getElementById('errorDelete').innerHTML = 'Numero no valido';
        return;
    }
    document.getElementById('errorDelete').innerHTML = '';
    for (var i = 0; i < childList.length; i++){
        if(childList[i].innerHTML.substring(0,1) == index){
            father.removeChild(childList[i]);
        }
    }

    reNumberChilds();
    
}

function reNumberChilds(){
    var father = document.getElementById('list');
    var childList = father.childNodes;

    for(var i = 0; i < childList.length; i++){
        childList[i].innerHTML = i+1 + childList[i].innerHTML.substring(1);
    }
}

function addAlbumToList(group){
    var list = document.getElementById('grupoList');
    var newOption = document.createElement('option');
    newOption.text = group;
    newOption.setAttribute('value', group);
    
    for(var i = 0; i < list.childNodes.length; i++){
        if(list.childNodes[i].value == group){
            document.getElementById('errorGrupo').innerHTML = 'Ya existe ese grupo en el listado';
            return;
        }
    }

    list.appendChild(newOption);
}