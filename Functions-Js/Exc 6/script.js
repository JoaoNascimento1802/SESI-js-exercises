document.addEventListener("DOMContentLoaded", function() {
    let texto = document.getElementById("texto"); 
    let button1 = document.getElementById("bt1");
    let button2 = document.getElementById("bt2");
    let button3 = document.getElementById("bt3");
    let mensagem = document.getElementById("mensagem");

    function textoNegrito() {
        texto.classList.toggle("negrito");
        atualizarMensagem("Negrito");
    }

    function textoItalico() {
        texto.classList.toggle("italico");
        atualizarMensagem("Itálico");
    }

    function textoSublinhado() {
        texto.classList.toggle("sublinhado");
        atualizarMensagem("Sublinhado");
    }

    function atualizarMensagem(estilo) {
        mensagem.innerHTML = `O texto agora está ${estilo}.`;
    }

    button1.addEventListener("click", textoNegrito);
    button2.addEventListener("click", textoItalico);
    button3.addEventListener("click", textoSublinhado);
});
