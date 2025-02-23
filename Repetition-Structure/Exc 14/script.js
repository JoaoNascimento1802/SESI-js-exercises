function mediaNotas() {
    let soma = 0;
    for (let i = 1; i <= 3; i++) {
        let nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
        soma += nota;
    }
    let media = soma / 3;
    alert("A média das notas é: " + media.toFixed(2));
}
