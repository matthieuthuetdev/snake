import { genererTableau, afficherTableau} from "./function.js";
const start = document.getElementById("start");
start.addEventListener("click", () => {
  genererTableau(20, 20);
  afficherTableau()
  let direction
});
