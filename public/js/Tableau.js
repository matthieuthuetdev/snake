class Tableau {
    constructor(maxLigne, maxColone) {
        this.maxLigne = maxLigne;
        this.maxColone = maxColone;
    }
    cree() {
        const table = document.getElementById("table")
        for (let i_l = 0; i_l < this.maxLigne; i_l++) {
            const ligne = table.insertRow()
            for (let i_c = 0; i_c < this.maxColone; i_c++) {
                const cases = ligne.insertCell()
                cases.setAttribute("id", "l" + i_l + "c" + i_c)
            }
        }

    }
    afficher() {
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
}
export { Tableau }