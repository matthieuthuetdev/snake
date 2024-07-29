import { Tableau } from "./Tableau.js";
import { Tete } from "./tete.js";
import { Corps } from "./corps.js";
const start = document.getElementById("start");

start.addEventListener("click", () => {
    const table = new Tableau(20, 20)
    const tete = new Tete()
    table.cree();
    table.afficher();
    tete.mouvement()
});
