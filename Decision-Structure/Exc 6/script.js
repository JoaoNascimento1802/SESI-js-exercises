let saldo = 1000;
let operacao = prompt("Escolha uma operação: saque, depósito ou consulta").toLowerCase();

if (operacao === "saque") {
    let valor = parseFloat(prompt("Digite o valor do saque:"));
    if (valor > saldo) {
        console.log("Saldo insuficiente!");
    } else {
        saldo -= valor;
        console.log(`Saque realizado! Saldo atual: R$ ${saldo}`);
    }
} else if (operacao === "depósito") {
    let valor = parseFloat(prompt("Digite o valor do depósito:"));
    saldo += valor;
    console.log(`Depósito realizado! Saldo atual: R$ ${saldo}`);
} else if (operacao === "consulta") {
    console.log(`Saldo atual: R$ ${saldo}`);
} else {
    console.log("Operação inválida!");
}
