function ordenarArray() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(parseInt(prompt(`Digite o ${i + 1}º número:`)));
    }
    
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - 1 - i; j++) {
            if (numeros[j] > numeros[j + 1]) {
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
            }
        }
    }
    
    alert("Números ordenados: " + numeros.join(", "));
}
