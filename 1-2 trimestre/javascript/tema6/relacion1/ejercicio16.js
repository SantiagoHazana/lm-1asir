var months = Array(12);
var final = 0;
var media = 0;

function calculate() {
    final = 0;
    months[0] = parseFloat(document.getElementById("january").value);
    months[1] = parseFloat(document.getElementById("february").value);
    months[2] = parseFloat(document.getElementById("march").value);
    months[3] = parseFloat(document.getElementById("april").value);
    months[4] = parseFloat(document.getElementById("may").value);
    months[5] = parseFloat(document.getElementById("june").value);
    months[6] = parseFloat(document.getElementById("july").value);
    months[7] = parseFloat(document.getElementById("august").value);
    months[8] = parseFloat(document.getElementById("september").value);
    months[9] = parseFloat(document.getElementById("october").value);
    months[10] = parseFloat(document.getElementById("november").value);
    months[11] = parseFloat(document.getElementById("december").value);

    months.forEach(money => {
        final += money;
    });

    media = final / 12;

    document.getElementById("result").innerHTML = "La ganancia media es " + media.toFixed(2);
}