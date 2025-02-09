document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("passwordForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        let senha = document.getElementById("senha").value;
        let mensagem = document.getElementById("mensagem");
        let erros = [];

        function validarTamanho() {
            if (senha.length < 8) {
                erros.push("A senha deve ter no mínimo 8 caracteres.");
            }
        }

        function validarLetrasMaiusculas() {
            if (!/[A-Z]/.test(senha)) {
                erros.push("A senha deve conter pelo menos 1 letra maiúscula.");
            }
        }

        function validarLetrasMinusculas() {
            if (!/[a-z]/.test(senha)) {
                erros.push("A senha deve conter pelo menos 1 letra minúscula.");
            }
        }

        function validarNumeros() {
            if (!/[0-9]/.test(senha)) {
                erros.push("A senha deve conter pelo menos 1 número.");
            }
        }

        function validarCaracteresEspeciais() {
            if (!/[!@#$%^&*]/.test(senha)) {
                erros.push("A senha deve conter pelo menos 1 caractere especial (!@#$%^&*).");
            }
        }

        // Chama todas as funções de validação
        validarTamanho();
        validarLetrasMaiusculas();
        validarLetrasMinusculas();
        validarNumeros();
        validarCaracteresEspeciais();

        if (erros.length === 0) {
            mensagem.textContent = "Senha está correta!";
            mensagem.className = "success";
        } else {
            mensagem.innerHTML = "Senha inválida. Verifique os erros:<br>" + erros.join("<br>");
            mensagem.className = "error";
        }
    });
});
