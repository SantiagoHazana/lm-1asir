var farenheit;

function calculateC() {
    farenheit = parseFloat(document.getElementById("faren").value);
    var celcius = (farenheit - 32) * 5 / 9;

    document.getElementById("result").innerHTML = farenheit + " ºF equivale a " + celcius.toFixed(2) + " ºC";
}