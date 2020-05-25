var hours;
var price;
var irpf;

function calculatePay() {
    hours = parseFloat(document.getElementById("hours").value);
    price = parseFloat(document.getElementById("price").value);
    irpf = parseFloat(document.getElementById("irpf").value);

    var result = hours * price - (price * hours * irpf / 100);

    document.getElementById("pay").innerHTML = "El sueldo es: €" + result;
}