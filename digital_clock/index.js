let hrsE1 = document.getElementById("hrs");
let minE1 = document.getElementById("min");
let secE1 = document.getElementById("sec");
let ampmE1 = document.getElementById("ampm");

function clock() {
    let time = [
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds(),
    ];
    let elements = [hrsE1, minE1, secE1];

    for (let i = 0; i < 3; i++) {
        elements[i].textContent = time[i];

        let h = time[0];

        if (h >= 12) {
            ampmE1.textContent = "PM";
        }
        else {
            ampmE1.textContent = "AM";
        }
    }
}
clock();
setInterval(clock, 1000);