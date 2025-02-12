//Exemplo de objetos , feitos para armazenar dados complexos.
const funcionarios = {
    funcionario1: {
        nome: 'Joao',
        email: 'joao@gmail.com',
        idade: '15',
        disponivel: true,
    },
    funcionario2: {
        nome: 'Joao',
        email: 'joao@gmail.com',
        idade: '15',
        disponivel: false,
    }
};

// Exemplo concatenação.
console.log(funcionarios.funcionario1);

let nomeexemplo = "emanuel";

let saudacao = "ola " + nomeexemplo + "!"
console.log(saudacao)

let templatestring = `Bem vindo(a) ${nomeexemplo}!`;
console.log(templatestring);


//Manipulação Boolean , o "?" é um operador ternário , onde a linha "let acessoPermitido = maior ? "Sim" : "Não";" é um if else , se true = Sim , else Não .
let maior = true;
let acessoPermitido = maior ? "Sim" : "Não";
console.log(`Acesso permitido? ${acessoPermitido}`);


//Comparação , console.log(a == b); compara o valor , e o console.log(a === b); compara valor e tipo.
let a = 10;
let b = "10"    

console.log(a == b);
console.log(a === b);

//Operadores Lógicos , && retorna True se ambas forem verdadeiras , O operador OR (||) retorna true se pelo menos uma das condições for verdadeira, O operador NOT (!) inverte o valor booleano.

let x = 5;
let y = 10;

let testeAnd = (x < 10) && (y > 5); 
let testeOr = (x > 10) || (y < 5); 
let testeNot = !testeAnd; //false

console.log(`Teste And: ${testeAnd}, Teste Or: ${testeOr}, Teste Not: ${testeNot}`)

//Atribuição

let c = 10

c += 10;
console.log(c);

c -= 5
console.log(c);

//Operador Ternario 2

let maiorIdade = 18;
let mensagem = (maiorIdade >=18) ? "Maior" : "Menor";
console.log(mensagem);

//Switch

let meses = 2;
let mes;

switch (meses) {
    case 1:
        mes = "Janeiro"
        console.log(mes)
        break;

    case 2:
        mes = "Fevereiro"
        console.log(mes)
         break;

    case 3:
        mes = "Março"
        console.log(mes)
        break;

    default:
        console.log("Insira valor valído")
        break;
}