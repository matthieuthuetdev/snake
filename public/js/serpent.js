class Serpent {
  constructor() {
    this.teteLigne = 10;
    this.teteColone = 10;
    this.teteId = undefined;
    this.direction = undefined;
    this.longueure = 3;
    this.scor = 0;
  }
  defTeteId() {
    this.teteId = "l" + this.teteLigne + "c" + this.teteColone;
  }
  mouvement() {
    document.addEventListener("keydown", (e) => {
      if (e.key == "ArrowUp") {
        this.direction = "up";
      } else if (e.key == "ArrowRight") {
        this.direction = "right";
      } else if (e.key == "ArrowDown") {
        this.direction = "down";
      } else if (e.key == "ArrowLeft") {
        this.direction = "left";
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
      this.defTeteId()
      console.log(this.teteId)
      if (this.direction == undefined) {
        const cases = document.getElementById(this.teteId)
        cases.classList.add("snake")
      } else {


        if (this.verifier()) {
          clearInterval(bouger)
        } else {
          const cases = document.getElementById(this.teteId)
          cases.classList.add("snake")
        }
      }
    }, 500);
  }
  verifier() {
    const casesSuivante = document.getElementById(this.teteId)
    const vivant = casesSuivante.classList.contains("snake")
    console.log(vivant)
    return vivant

  }
}
export { Serpent };
