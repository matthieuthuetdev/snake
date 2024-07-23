
class Serpent {
  constructor(tableMaxLigne, tableMaxColone) {
    this.teteLigne = 10;
    this.teteColone = 10;
    this.teteId = undefined;
    this.direction = undefined;
    this.longueure = 3;
    this.scor = 0;
    this.tableMaxLigne = this.tableMaxLigne
    this.tableMaxColone = this.tableMaxColone
  }
  defTeteId() {
    this.teteId = "l" + this.teteLigne + "c" + this.teteColone;
  }
  mouvement() {
    document.addEventListener("keydown", (e) => {
      const touche = e.key;
      if (touche.startsWith("Arrow")) {
        const flecheDirection = touche
        
        if (flecheDirection == "ArrowUp") {
          this.direction = "up";
        } else if (flecheDirection == "ArrowRight") {
          this.direction = "right";
        } else if (flecheDirection == "ArrowDown") {
          this.direction = "down";
        } else if (flecheDirection == "ArrowLeft") {
          this.direction = "left";
        }
      }
    });
    const bouger = setInterval(() => {
      if (this.direction == "up") {
        this.teteLigne--;
      } else if (this.direction == "right") {
        this.teteColone++;
      } else if (this.direction == "down") {
        this.teteLigne++;
      } else if (this.direction == "left") {
        this.teteColone--;
      }
      this.defTeteId();
      console.log(this.teteId);
      if (this.direction == undefined) {
        const cases = document.getElementById(this.teteId);
        cases.classList.add("snake");
      } else {
        if (this.verifier()) {
          clearInterval(bouger);
        } else {
          const cases = document.getElementById(this.teteId);
          cases.classList.add("snake");
        }
      }
      console.log("tableau : "+ this.tableau.maxligne)
    }, 500);
  }
  verifier() {
    const casesSuivante = document.getElementById(this.teteId);
    const vivant = casesSuivante.classList.contains("snake");
    console.log(vivant);
    return vivant;
  }
}
export { Serpent };
