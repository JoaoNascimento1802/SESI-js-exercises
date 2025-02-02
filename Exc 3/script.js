function validarSenha(senha) {
    let erros = [];

    if (senha.length < 8) {
        erros.push("A senha deve ter no mínimo 8 caracteres.");
    }
    if (!/[A-Z]/.test(senha)) {
        erros.push("A senha deve conter pelo menos 1 letra maiúscula.");
    }
    if (!/[a-z]/.test(senha)) {
        erros.push("A senha deve conter pelo menos 1 letra minúscula.");
    }
    if (!/[0-9]/.test(senha)) {
        erros.push("A senha deve conter pelo menos 1 número.");
    }
    if (!/[!@#$%^&*]/.test(senha)) {
        erros.push("A senha deve conter pelo menos 1 caractere especial (!@#$%^&*).");
    }

    return erros;
}


let senha = prompt("Digite sua senha:");


let erros = validarSenha(senha);

if (erros.length === 0) {
    console.log("✅ Senha válida!");
} else {
    console.log(" Senha inválida! Verifique os seguintes erros:");
    erros.forEach(erro => console.log(`- ${erro}`));
}
