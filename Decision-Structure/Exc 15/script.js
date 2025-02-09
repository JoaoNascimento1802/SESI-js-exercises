let cor = prompt("Digite uma cor em português:").toLowerCase();

switch (cor) {
    case "vermelho":
        console.log("Red");
        break;
    case "azul":
        console.log("Blue");
        break;
    case "verde":
        console.log("Green");
        break;
    case "amarelo":
        console.log("Yellow");
        break;
    default:
        console.log("Cor não reconhecida.");
}
