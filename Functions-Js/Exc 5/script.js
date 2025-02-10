document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cpfForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let cpf = document.getElementById("cpf").value;
        let mensagem = document.getElementById("mensagem");
        let erros = [];

        function validarTamanho() {
            if (cpf.length < 11) {  
                erros.push("O CPF deve ter no mínimo 11 caracteres.");
            }
        }

        function validarUf() {
            if (cpf.length === 11) {
                let nonoDigito = cpf.charAt(8);
        
                const estados = {
                    "0": "Rio Grande do Sul",
                    "1": "Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins",
                    "2": "Pará, Amazonas, Acre, Amapá, Rondônia e Roraima",
                    "3": "Ceará, Maranhão e Piauí",
                    "4": "Pernambuco, Rio Grande do Norte, Paraíba e Alagoas",
                    "5": "Bahia e Sergipe",
                    "6": "Minas Gerais",
                    "7": "Rio de Janeiro e Espírito Santo",
                    "8": "São Paulo",
                    "9": "Paraná e Santa Catarina"
                };
        
                return estados[nonoDigito] || "UF desconhecida";
            } else {
                return "CPF inválido para verificar UF.";
            }
        }
        
   
        validarTamanho();
        let uf = validarUf();

        if (erros.length > 0) {
            mensagem.innerHTML = erros.join("<br>");
        } else {
            mensagem.innerHTML = `CPF válido! Estado de emissão: ${uf}`;
        }
    });
});
