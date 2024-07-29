class Tete {
    constructor() {
        this.teteLigne = 10;
        this.teteColone = 10;
        this.teteId = undefined;
        this.direction = "";
        this.longueure = 3;
        this.scor = 0;
        this.positionHistorique = [];
    }
    defTeteId() {
        this.teteId = "l" + this.teteLigne + "c" + this.teteColone;
    }
    mouvement() {

        document.addEventListener("keydown", (e) => {
            const touche = e.key;
            if (touche.startsWith("Arrow")) {
                const flecheDirection = touche;

                if (flecheDirection == "ArrowUp" && this.direction != "down") {
                    this.direction = "up";
                } else if (
                    flecheDirection == "ArrowRight" &&
                    this.direction != "left"
                ) {
                    this.direction = "right";
                } else if (flecheDirection == "ArrowDown" && this.direction != "up") {
                    this.direction = "down";
                } else if (
                    flecheDirection == "ArrowLeft" &&
                    this.direction != "right"
                ) {
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
                    const cases = document.getElementById(this.teteId);
                    cases.classList.add("snake");
                } else {
                    clearInterval(bouger);
                }
            }
            this.ajusterLongueure();

        }, 500);
    }
    verifier() {
        let vivant = false;
        const casesSuivante = document.getElementById(this.teteId);
        if (casesSuivante != null) {
            if (!casesSuivante.classList.contains("snake")) {
                vivant = true;
            }
        }
        return vivant;
    }

}