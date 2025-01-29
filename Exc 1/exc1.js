let peso = parseFloat(prompt("Informe o seu peso no formato 1.00 :"));
let altura = parseFloat(prompt("Informe a sua altura em Kg:"));

const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log("Abaixo do Peso!");
} 
else if (imc >= 18.5 && imc <= 24.99) {
    console.log("Eutrófico!");
} 
else if (imc >= 25 && imc <= 29.99) {
    console.log("Sobrepeso!");
}
else if (imc >= 30 && imc <= 34.99) {
    console.log("Obesidade Grau 1!");
}
else if (imc >= 35 && imc <= 39.99) {
    console.log("Obesidade Grau 2!");
}
else if (imc >= 40) {
    console.log("Obesidade Grau 3!");
}
