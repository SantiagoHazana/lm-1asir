var hours;
var minutes;
var seconds;

function calculateSeconds() {
    hours = parseFloat(document.getElementById("hours").value);
    minutes = parseFloat(document.getElementById("minutes").value);
    seconds = parseFloat(document.getElementById("seconds").value)
    var resultSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;

    document.getElementById("result").innerHTML = "En total son " + resultSeconds + " segundos";
}