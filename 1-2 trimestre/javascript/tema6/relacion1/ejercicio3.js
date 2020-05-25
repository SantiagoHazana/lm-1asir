var number = 0;

function calculateSquare() {
    number = parseFloat(document.getElementById("number").value);
    var result = number * number;
    console.log("El cuadrado de " + number + " = " + result);
    alert("El cuadrado de " + number + " = " + result);
}