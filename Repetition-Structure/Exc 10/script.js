function maiorNumero() {
    let maior = -Infinity;
    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número:`));
        if (num > maior) {
            maior = num;
        }
    }
    alert("O maior número é: " + maior);
}
