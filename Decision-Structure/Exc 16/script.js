let opcao = parseInt(prompt("Escolha uma opção: \n1. Cadastrar\n2. Editar\n3. Excluir\n4. Listar\n0. Sair"));

switch (opcao) {
    case 1:
        console.log("Cadastro realizado.");
        break;
    case 2:
        console.log("Edição concluída.");
        break;
    case 3:
        console.log("Exclusão feita.");
        break;
    case 4:
        console.log("Listando itens...");
        break;
    case 0:
        console.log("Saindo...");
        break;
    default:
        console.log("Opção inválida.");
}
