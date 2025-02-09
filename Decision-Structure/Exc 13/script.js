let dia = parseInt(prompt("Digite o dia:"));
let mes = parseInt(prompt("Digite o mês:"));
let ano = parseInt(prompt("Digite o ano:"));

let diasNoMes;
switch (mes) {
    case 2:
        diasNoMes = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ? 29 : 28;
        break;
    case 4: case 6: case 9: case 11:
        diasNoMes = 30;
        break;
    default:
        diasNoMes = 31;
}

if (dia > 0 && dia <= diasNoMes) {
    console.log("Data válida!");
} else {
    console.log("Data inválida!");
}
