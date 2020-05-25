var firstNumber;
var secondNumber;
var resultText;

function calculateOperations() {
    firstNumber = parseFloat(document.getElementById("first").value);
    secondNumber = parseFloat(document.getElementById("second").value);

    var suma = firstNumber + secondNumber;
    var resta = firstNumber - secondNumber;
    var producto = firstNumber * secondNumber;
    var division = firstNumber / secondNumber;

    resultText = "Suma = " + suma + "<br>" +
        "Resta = " + resta + "<br>" +
        "Producto = " + producto + "<br>" +
        "Division = " + division;

    console.log(resultText);
    document.getElementById("result").innerHTML = resultText;
}