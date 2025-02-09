let tipoProduto = prompt("Digite o tipo de produto (A, B, C):").toUpperCase();
let preco = parseFloat(prompt("Digite o preço do produto:"));

let imposto;
switch (tipoProduto) {
    case "A":
        imposto = 0.10;
        break;
    case "B":
        imposto = 0.15;
        break;
    case "C":
        imposto = 0.20;
        break;
    default:
        console.log("Tipo de produto inválido.");
}

if (imposto !== undefined) {
    let valorFinal = preco + (preco * imposto);
    console.log(`Preço final com imposto: R$ ${valorFinal.toFixed(2)}`);
}
