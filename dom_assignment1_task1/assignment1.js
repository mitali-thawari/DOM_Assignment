let springE1 = document.getElementById("spring");
let summerE1 = document.getElementById("summer");
let autumnE1 = document.getElementById("autumn");
let winterE1 = document.getElementById("winter");

function showSeason(season) {
    let seasons = [springE1, summerE1, autumnE1, winterE1];
    for (let i = 0; i < seasons.length; i++) {
        seasons[i].style.display = "none";
        season.style.height = "600px";
        season.style.width = "400px";
        season.style.display = "inline";
    }

}
function onspring() {
    showSeason(springE1);

}
function onsummer() {
    showSeason(summerE1);
}
function onautumn() {
    showSeason(autumnE1);
}
function onwinter() {
    showSeason(winterE1);
}