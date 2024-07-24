import { Tableau } from "./Tableau.js";
import { Serpent } from "./Serpent.js";
const start = document.getElementById("start");

start.addEventListener("click", () => {
    const table = new Tableau(20, 20)
    const serpent = new Serpent()
    table.cree();
    table.afficher();
    serpent.commancerAJouer()
});
