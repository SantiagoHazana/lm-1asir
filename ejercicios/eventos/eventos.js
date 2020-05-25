// const myDiv = document.querySelector("#content");
// myDiv.addEventListener("mouseMove", changeColor());
function changeColor(){
    console.log('cambiando color');
    document.getElementById('content').style.borderColor = 'rgb(' + Math.random()*255 + ', ' + Math.random()*255 + ', ' + Math.random()*255+')';
}