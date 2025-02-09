let medida = parseFloat(prompt("Digite a medida:"));
let unidadeOrigem = prompt("Digite a unidade (km, m, cm):").toLowerCase();
let unidadeDestino = prompt("Converter para (milhas, metros, pés):").toLowerCase();

let resultado;
switch (unidadeDestino) {
    case "milhas":
        resultado = unidadeOrigem === "km" ? medida * 0.621371 : medida / 1609;
        break;
    case "metros":
        resultado = unidadeOrigem === "km" ? medida * 1000 : medida / 100;
        break;
    case "pés":
        resultado = unidadeOrigem === "m" ? medida * 3.281 : medida * 30.48;
        break;
    default:
        console.log("Unidade inválida.");
}

console.log(`Resultado: ${resultado.toFixed(2)} ${unidadeDestino}`);
