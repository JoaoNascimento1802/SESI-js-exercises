let opcoes = ["pedra", "papel", "tesoura"];
let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();
let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

console.log(`Computador escolheu: ${escolhaComputador}`);

switch (escolhaUsuario) {
    case escolhaComputador:
        console.log("Empate!");
        break;
    case "pedra":
        console.log(escolhaComputador === "tesoura" ? "Você venceu!" : "Você perdeu!");
        break;
    case "papel":
        console.log(escolhaComputador === "pedra" ? "Você venceu!" : "Você perdeu!");
        break;
    case "tesoura":
        console.log(escolhaComputador === "papel" ? "Você venceu!" : "Você perdeu!");
        break;
    default:
        console.log("Escolha inválida.");
}
