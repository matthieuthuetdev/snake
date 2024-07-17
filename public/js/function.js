function afficherTableau() {
    const h = window.innerHeight;
    const l = window.innerWidth;
    const table = document.getElementById("table");
    table.classList.remove("display_none");
    table.style.height = h * 0.9 + "px"
    table.style.width = h * 0.9 + "px"
    table.style.position = "absolute"
    table.style.left = "25%"
    table.style.top = "10%"
    const l5c6 = document.getElementById("l10c10")
    const befor_start = document.getElementById("beforstart");
    befor_start.style.display = "none";
    jouer()
}
function jouer() {
    let direction = changerDirection()
}
function changerDirection() {
    console.log("ff")
}
export { genererTableau }
export { afficherTableau }