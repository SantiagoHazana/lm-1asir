var firstNumber;
var secondNumber;
var thirdNumber;
var fourthNumber;
var fifthNumber;

function calculateAvg() {
    firstNumber = parseFloat(document.getElementById("first").value);
    secondNumber = parseFloat(document.getElementById("second").value);
    thirdNumber = parseFloat(document.getElementById("third").value);
    fourthNumber = parseFloat(document.getElementById("fourth").value);
    fifthNumber = parseFloat(document.getElementById("fifth").value);
    var result = (firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber) / 5;
    console.log("La media es: " + result);
    alert("La media es: " + result);
}