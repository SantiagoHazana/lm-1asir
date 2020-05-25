var number;

function calculate() {
    number = document.getElementById("number").value.toString();

    var unidades = number[3];
    var decenas = number[2] + "0";
    var centenas = number[1] + "00";
    var millares = number[0] + "000";

    document.getElementById("result").innerHTML = "Unidades: " + unidades + "<br>" +
        "Decenas: " + decenas + "<br>" +
        "Centenas: " + centenas + "<br>" +
        "Millares: " + millares + "<br>";
}