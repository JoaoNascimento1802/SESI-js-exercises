//Vamos pegar o elemento button com id =alternarBotao
const botao = document.getElementById('alternarBotao');

//Vamos pegar o elemento div com id = mensagem
const msg = document.getElementById('mensagem');

//vamos adicionar um ouvinte de eventos do JS - click

botao.addEventListener('click', function(){
    //1. vamos verificar que se a msg esta oculta
    if(msg.classList.contains('oculto')){
        // vamos remover o estilo oculto
       msg.classList.remove('oculto');

    } else {
        msg.classList.add('oculto');
    }
});