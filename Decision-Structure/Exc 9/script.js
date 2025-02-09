let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 7;

while (tentativas > 0) {
    let chute = parseInt(prompt("Adivinhe o número (1 a 100):"));
    let diferenca = Math.abs(chute - numeroAleatorio);

    if (chute === numeroAleatorio) {
        console.log("Parabéns! Você acertou!");
        break;
    } else {
        console.log(chute > numeroAleatorio ? "Muito alto" : "Muito baixo");
        console.log(diferenca < 10 ? "Quente" : "Frio");
    }

    tentativas--;
    console.log(`Tentativas restantes: ${tentativas}`);
}

if (tentativas === 0) {
    console.log(`Você perdeu! O número era ${numeroAleatorio}`);
}
