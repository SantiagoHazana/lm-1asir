var firstNumber = 0;
var secondNumber = 0;
var thirdNumber = 0;

function calculateSum() {
    firstNumber = parseFloat(document.getElementById("first").value);
    secondNumber = parseFloat(document.getElementById("second").value);
    thirdNumber = parseFloat(document.getElementById("third").value);
    var result = firstNumber + secondNumber + thirdNumber;
    console.log("La suma de " + firstNumber + " + " + secondNumber + " + " + thirdNumber + " = " + result);
    alert("La suma de " + firstNumber + " + " + secondNumber + " + " + thirdNumber + " = " + result);
}