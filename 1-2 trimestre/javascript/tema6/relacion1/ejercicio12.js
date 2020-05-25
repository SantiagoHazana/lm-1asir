var base;
var height;

function calculateSurface() {
    base = parseFloat(document.getElementById("base").value);
    height = parseFloat(document.getElementById("height").value);

    var surface = base * height / 2;

    document.getElementById("result").innerHTML = "La superficie es " + surface.toFixed(2) + " m2";
}