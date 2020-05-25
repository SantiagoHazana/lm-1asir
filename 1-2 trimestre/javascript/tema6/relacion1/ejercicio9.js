var number;
var exp;

function calculateExp() {
    number = parseFloat(document.getElementById("number").value);
    exp = parseFloat(document.getElementById("exponent").value);

    var result = Math.pow(number, exp);

    document.getElementById("result").innerHTML = "El resultado es: " + result;
}