var radius;

function calculateCirc() {
    radius = parseFloat(document.getElementById("radius").value);

    var long = 2 * radius * Math.PI;
    var area = Math.PI * Math.pow(radius, 2);

    document.getElementById("result").innerHTML = "Longitud = " + long.toFixed(2) + "m <br>" +
        "&Aacute;rea = " + area.toFixed(2) + " m2";
}