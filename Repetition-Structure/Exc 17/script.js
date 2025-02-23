function jogar() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativa;
    
    while (tentativa !== numeroSecreto) {
        tentativa = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
        
        if (tentativa > numeroSecreto) {
            alert("Muito alto! Tente novamente.");
        } else if (tentativa < numeroSecreto) {
            alert("Muito baixo! Tente novamente.");
        } else {
            alert("Parabéns! Você acertou.");
        }
    }
}
