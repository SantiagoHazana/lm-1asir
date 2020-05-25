var images = new Array();
images[0] = new Image();
images[0].src = '../../images/Abstract1.jpg';
images[1] = new Image();
images[1].src = '../../images/Abstract2.jpg';
images[2] = new Image();
images[2].src = '../../images/Abstract3.jpg';
images[3] = new Image();
images[3].src = '../../images/Abstract4.jpg';
images[4] = new Image();
images[4].src = '../../images/Abstract5.jpg';
var count = 0;


function changeImage(){
    if (count >= 5) count = 0;
    var image = document.getElementById('image');
    image.src = images[count].src;
    addText(images[count].src);
    count ++;
}

function addText(text){
    var myDiv = document.getElementById('content');
    var myP = document.createElement('p');
    myP.innerHTML = 'Se cambio a la imagen ' + text.substr(text.length - 13);
    myDiv.appendChild(myP);
}