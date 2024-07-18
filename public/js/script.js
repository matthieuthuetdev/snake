import { Tableau } from "./Tableau.js";
import { Serpent } from "./serpent.js";
const start = document.getElementById("start");
start.addEventListener("click", () => {
const table = new Tableau(20,20)
const serpent = new Serpent()
serpent.mouvement()
table.cree();
table.afficher();


});
