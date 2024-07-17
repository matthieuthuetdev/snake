function genererTableau(l, c) {
    const table = document.getElementById("table")
    for (let i_l = 0; i_l < l; i_l++) {
        const ligne = table.insertRow()
        for (let i_c = 0; i_c < c; i_c++) {
            const cases = ligne.insertCell()
            cases.setAttribute("id", "l" + i_l + "c" + i_c)
        }
    }
}
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

}
function mouvement(){
    let teteLigne = 10
    let teteColone = 10
    
}
export { genererTableau, afficherTableau }