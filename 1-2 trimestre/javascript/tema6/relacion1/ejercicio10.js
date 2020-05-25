var totalHours;
var normalPrice;
var extraPrice;
var irpf;
var pay;
var result;

function calculatePay() {
    totalHours = parseInt(document.getElementById("hours").value);
    normalPrice = parseInt(document.getElementById("normalPrice").value);
    extraPrice = parseInt(document.getElementById("extraPrice").value);
    irpf = parseInt(document.getElementById("irpf").value);

    if (totalHours < 160) {
        totalHours = 160;
        pay = (totalHours * normalPrice);
        result = pay - (pay * irpf / 100);
    } else {
        pay = (160 * normalPrice) + ((totalHours - 160) * extraPrice);
        result = pay - (pay * irpf / 100);
    }

    document.getElementById("result").innerHTML = "Sueldo = " + result;
}