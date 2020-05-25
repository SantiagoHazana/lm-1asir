var price;
var units;
var discount;
var iva;

function calculatePrice() {
    price = parseFloat(document.getElementById("price").value);
    units = parseFloat(document.getElementById("units").value);
    discount = parseFloat(document.getElementById("discount").value);
    iva = parseFloat(document.getElementById("iva").value);

    var result = ((price * units) - (price * units * discount / 100)) * (1 + (iva / 100));

    document.getElementById("result").innerHTML = "Precio final: " + result + "€";
}