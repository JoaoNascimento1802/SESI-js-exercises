function calcularIMC() {
    let peso = parseFloat(prompt("Digite seu peso (kg):"));
    let altura = parseFloat(prompt("Digite sua altura (m):"));
    let idade = parseInt(prompt("Digite sua idade:"));
    
    if (isNaN(peso) || isNaN(altura) || isNaN(idade) || peso <= 0 || altura <= 0 || idade <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    
    let imc = peso / (altura * altura);
    let classificacao = "";
    
    if (idade > 65) {
        imc -= 1; 
    } else if (idade < 18) {
        imc += 1; 
    }
    
    if (imc < 18.5) {
        classificacao = "Abaixo do Peso";
    } else if (imc < 24.9) {
        classificacao = "Normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 39.9) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III (Mórbida)";
    }
    
    alert(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
}

calcularIMC();
