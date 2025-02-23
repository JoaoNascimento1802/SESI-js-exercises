function piramideAsteriscos() {
    let resultado = "";
    for (let i = 1; i <= 5; i++) {
        resultado += " ".repeat(5 - i) + "*".repeat(2 * i - 1) + "\n";
    }
    alert(resultado);
}
