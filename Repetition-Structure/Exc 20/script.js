function converterParaBinario() {
    let decimal = parseInt(prompt("Digite um número decimal:"));
    let binario = "";
    
    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }
    
    alert("Número em binário: " + (binario || "0"));
}
