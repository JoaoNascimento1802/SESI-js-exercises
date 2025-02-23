let contagem = 10;
let resultadoContagem = "";
while (contagem >= 1) {
    resultadoContagem += contagem + " ";
    contagem--;
}
document.getElementById("contagem").innerText = resultadoContagem;
