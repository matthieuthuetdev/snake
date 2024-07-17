import { genererTableau } from "./function.js";
const h = window.innerheight;
const l = window.innerWidth;
const start = document.getElementById("start");
start.addEventListener("click", () => {
  genererTableau(20, 20);
  const table = document.getElementById("table");
  table.classList.remove("display_none");
  table.style.height = h / 2 + "px";
  table.style.width = h + "px"
  const befor_start = document.getElementById("beforstart");
  befor_start.style.display = "none";
});
