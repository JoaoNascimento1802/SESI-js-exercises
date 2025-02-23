function gerarTrianguloPascal() {
    let linhas = 5;
    let triangulo = [[1]];

    for (let i = 1; i < linhas; i++) {
        let linha = [1];
        for (let j = 1; j < i; j++) {
            linha.push(triangulo[i - 1][j - 1] + triangulo[i - 1][j]);
        }
        linha.push(1);
        triangulo.push(linha);
    }

    let resultado = "Triângulo de Pascal:\n";
    for (let linha of triangulo) {
        resultado += linha.join(" ") + "\n";
    }

    alert(resultado);
}
