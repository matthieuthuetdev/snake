class Tableau {
    Tableau(maxLigne, maxColone, scor,) {
        this.maxLigne = maxLigne;
        this.maxColone = maxColone;
        this.scor = scor;
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
}