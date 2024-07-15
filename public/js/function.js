function genererTableau(l, c) {
    const table = document.getElementById("table")
    for (let i_l = 0; i_l < l; i_l++) {
        const ligne = table.insertRow()
        for (let i_c = 0; i_c < c; i_c++) {
            const cases = ligne.insertCell()
            cases.setAttribute("id","l"+i_l+"c"+i_c)
        }
    }
    
}export {genererTableau}