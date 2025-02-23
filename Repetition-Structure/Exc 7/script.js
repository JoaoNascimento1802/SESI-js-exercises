function somaImpares() {
    let soma = 0;
    for (let i = 1; i <= 100; i += 2) {
        soma += i;
    }
    alert("Soma dos ímpares de 1 a 100: " + soma);
}
