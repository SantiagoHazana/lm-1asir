var startDays;
var daysMonth = 30.4167;

function calculateDays() {
    startDays = document.getElementById("days").value;
    var leftDays = startDays;

    var years = parseInt(startDays / 365);
    leftDays -= (years * 365);

    var months = parseInt(leftDays / daysMonth);
    leftDays -= (months * daysMonth);

    var days = leftDays;

    document.getElementById("result").innerHTML = startDays + " dias son " + years + " años, " + months + " meses y " + days.toFixed(2) + " dias.";
}