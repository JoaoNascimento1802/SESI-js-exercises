function contarVogais() {
    let palavra = prompt("Digite uma palavra:");
    let vogais = "aeiouAEIOU";
    let contador = 0;
    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    alert(`A palavra "${palavra}" tem ${contador} vogais.`);
}
