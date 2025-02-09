let classe = prompt("Escolha a classe: econômica, executiva, primeira classe").toLowerCase();
let passageiros = parseInt(prompt("Número de passageiros:"));
let precisaAdjacente = prompt("Precisa de assentos adjacentes? (sim/não)").toLowerCase() === "sim";

let assentosDisponiveis = { "econômica": 30, "executiva": 10, "primeira classe": 5 };

if (assentosDisponiveis[classe] >= passageiros) {
    if (precisaAdjacente && passageiros > 1) {
        console.log("Assentos adjacentes alocados.");
    }
    assentosDisponiveis[classe] -= passageiros;
    console.log("Reserva confirmada!");
} else {
    console.log("Assentos indisponíveis na classe escolhida.");
}
