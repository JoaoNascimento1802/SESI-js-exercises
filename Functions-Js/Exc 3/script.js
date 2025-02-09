function gerarNumeros() {
    const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    const lista = document.getElementById("listaNumeros");

    lista.innerHTML = "";
    
    numeros.forEach(numero => {
        const li = document.createElement("li");
        li.textContent = numero;
        lista.appendChild(li);
    });
}

gerarNumeros();