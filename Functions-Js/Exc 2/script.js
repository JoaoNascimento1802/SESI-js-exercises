let peso = parseFloat(prompt("Digite o seu Peso :"));
let alt = parseFloat(prompt("Digite a sua Altura :"));
let calculator = (peso/Math.pow(alt,2));
let classificacao;

function imc(calculator){

    if (calculator < 18.5) {
        classificacao = "Abaixo do Peso";
    } else if (calculator < 24.9) {
        classificacao = "Normal";
    } else if (calculator < 29.9) {
        classificacao = "Sobrepeso";
    } else if (calculator < 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (calculator < 39.9) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III (Mórbida)";
    }
        
    return classificacao;
}
imc(calculator);

console.log(`Seu IMC é ${calculator.toFixed(2)} e sua classificação é: ${imc(calculator)}`);