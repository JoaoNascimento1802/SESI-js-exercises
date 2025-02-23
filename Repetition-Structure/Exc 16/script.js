function encontrarNumerosArmstrong() {
    let resultado = "Números de Armstrong entre 100 e 1000:\n";
    for (let num = 100; num < 1000; num++) {
        let soma = 0;
        let numStr = num.toString();
        for (let i = 0; i < numStr.length; i++) {
            soma += Math.pow(parseInt(numStr[i]), 3);
        }
        if (soma === num) {
            resultado += num + "\n";
        }
    }
    alert(resultado);
}
