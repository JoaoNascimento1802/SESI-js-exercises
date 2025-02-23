function calcularFatorial() {
    let num = parseInt(prompt("Digite um número para calcular o fatorial:"));
    let fatorial = 1;
    for (let i = num; i > 0; i--) {
        fatorial *= i;
    }
    alert(`O fatorial de ${num} é: ${fatorial}`);
}
