let genero = prompt("Escolha um gênero: ação, comédia, drama").toLowerCase();
let ano = prompt("Antes ou depois de 2010?").toLowerCase();
let ator = prompt("Tem um ator favorito? (opcional)");

let filmes = [
    { titulo: "Filme Ação 1", genero: "ação", ano: "antes", ator: "ator1" },
    { titulo: "Filme Comédia 1", genero: "comédia", ano: "depois", ator: "ator2" },
    { titulo: "Filme Drama 1", genero: "drama", ano: "depois", ator: "ator3" }
];

let recomendacao = filmes.find(f => f.genero === genero && f.ano === ano && (ator ? f.ator === ator : true));

console.log(recomendacao ? `Recomendamos: ${recomendacao.titulo}` : "Nenhum filme encontrado.");
