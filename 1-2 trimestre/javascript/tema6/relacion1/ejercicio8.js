var price;

function calculatePrice() {
    price = parseFloat(document.getElementById("price").value);

    var netPrice = price / 1.21;
    var iva = price - netPrice;

    document.getElementById("result").innerHTML = "El precio neto es " + netPrice.toFixed(2) + "€ " + "con " + iva.toFixed(2) + "€ de iva."
}