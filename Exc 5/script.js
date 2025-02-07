let saldo = 1000;


switch (operecao) {
    case saque:

        if (saque > saldo) {
            console.log("Valor Invalido")
        }
        else{
            console.log(`Sucesso , seu saldo agora é de ${saldo}:`)
            saque -= saldo;
        }
        break;

    case deposito:
        if (deposito < saldo) {
            console.log("Valor Invalido")
        }
        else{
            console.log(`Sucesso , seu saldo agora é de ${saldo}:`)
            deposito += saldo;
        }
        break;

    case consulta:
        console.log(`Seu saldo é ${saldo}`)
        break

    default:
        console.log("Insira uma operação válida ")
        break;
}