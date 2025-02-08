function validarLados(lado) {
    let erros = [];

    if (isNaN(lado) || parseFloat(lado) <= 0) {
        erros.push("Os lados devem ser valores positivos!");
    }

    return erros;
}

let somaLados = 0; 

for (let i = 1; i <= 3; i++) {
    let lado = parseFloat(prompt(`Digite o lado ${i}:`)); 

    let erros = validarLados(lado); 

    if (erros.length > 0) {
        console.log(` Erro no lado ${i}:`);
        erros.forEach(erro => console.log(`- ${erro}`));
    } else {
        somaLados += lado; 
    }
}

console.log(` A soma dos lados internos é: ${somaLados}`);
