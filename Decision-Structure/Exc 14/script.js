let lados = parseInt(prompt("Digite o número de lados da figura:"));

switch (lados) {
    case 3:
        console.log("Triângulo");
        break;
    case 4:
        console.log("Quadrilátero");
        break;
    case 5:
        console.log("Pentágono");
        break;
    case 6:
        console.log("Hexágono");
        break;
    default:
        console.log("Forma não reconhecida.");
}
