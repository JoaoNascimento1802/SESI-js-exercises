let conceito = prompt("Digite o conceito (A, B, C, D, F):").toUpperCase();

switch (conceito) {
    case "A":
        console.log("Excelente!");
        break;
    case "B":
        console.log("Bom.");
        break;
    case "C":
        console.log("Regular.");
        break;
    case "D":
        console.log("Ruim.");
        break;
    case "F":
        console.log("Insuficiente.");
        break;
    default:
        console.log("Conceito inválido.");
}
