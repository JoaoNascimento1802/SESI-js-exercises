let capital = parseFloat(prompt("Capital inicial:"));
let taxa = parseFloat(prompt("Taxa de juros anual (%):")) / 100;
let tempo = parseInt(prompt("Tempo (anos):"));
let freq = prompt("Frequência de capitalização (anual, mensal, diária)").toLowerCase();

let n = freq === "anual" ? 1 : freq === "mensal" ? 12 : 365;
let montante = capital * Math.pow(1 + taxa / n, n * tempo);
console.log(`Montante final: R$ ${montante.toFixed(2)}`);
console.log(`Lucro: R$ ${(montante - capital).toFixed(2)}`);
