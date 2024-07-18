class Serpent {
  constructor() {
    this.teteLigne = 10;
    this.teteColone = 10;
    this.direction = 0;
    this.longueure = 3;
    this.scor = 0;
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
    setInterval(() => {
      if (this.direction == "up") {
        this.teteLigne--;
      } else if (this.direction == "right") {
        this.teteColone++;
      } else if (this.direction == "down") {
        this.teteLigne++;
      } else if (this.direction == "left") {
        this.teteColone--;
      }
      const caseSible = document.getElementById("l" + this.teteLigne + "c" + this.teteColone)
      caseSible.classList.add("snake")

    }, 500);
  }

  jouer() {
    this.mouvement();
  }
}
export { Serpent };
