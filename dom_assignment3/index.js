let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

let stopBtn = document.getElementById("stopBtn");
let readyBtn = document.getElementById("readyBtn");
let goBtn = document.getElementById("goBtn");

stopBtn.addEventListener("click", function() {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "#444";
    green.style.backgroundColor = "#444";
});

readyBtn.addEventListener("click", function() {
    red.style.backgroundColor = "#434242";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "#444";
});

goBtn.addEventListener("click", function() {
    red.style.backgroundColor = "#5e5a5a";
    yellow.style.backgroundColor = "#444";
    green.style.backgroundColor = "green";
});
