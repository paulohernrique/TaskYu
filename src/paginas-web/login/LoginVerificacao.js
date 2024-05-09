function verificarLogin(){
    document.getElementById("login").addEventListener("submit", function (evento) {
        evento.preventDefault();

        let nome = document.getElementById("nome").value.trim();
        let email = document.getElementById("email").value.trim();
        let senha = document.getElementById("senha").value.trim();

        const alertaNome = document.getElementById("alerta-nome");
        const alertaEmail = document.getElementById("alerta-email");
        const alertaSenha = document.getElementById("alerta-senha");
        const alertaCampos = document.getElementById("alerta-campos");

        alertaCampos.classList.add("oculto");
        alertaNome.classList.add("oculto");
        alertaEmail.classList.add("oculto");
        alertaSenha.classList.add("oculto");

        if (nome == "" || email == "" || senha == "") {
            alertaCampos.classList.remove("oculto");
            return;
        }

        const validacaoNome = /^[a-zA-ZÀ-ÖØ-öø-ÿ\sçÇ]+$/;

        if (validacaoNome.test(nome) && nome.length <= 30){
            nome = nome.replace(/\s{2,}/g, " ").split(/\s/).map(function(palavra){
                return palavra.toLowerCase().charAt(0).toUpperCase() + palavra.slice(1);
            }).join(" ");
        } else {
            alertaNome.classList.remove("oculto");
            return;
        }

        const validacaoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if (!validacaoEmail.test(email)){
            alertaEmail.classList.remove("oculto");
            return;
        }

        if (!/^\w+$/.test(senha) || senha.length < 8 || senha.length > 15){
            alertaSenha.classList.remove("oculto");
            return;
        }
    });
}

function verificarEntrarConta(){
    document.getElementById("entrar-conta").addEventListener("submit", function(evento){
        evento.preventDefault();

        let email = document.getElementById("email").value.trim();
        let senha = document.getElementById("senha").value.trim();

        const alertaCampos = document.getElementById("alerta-campos");
        const alertaEmail = document.getElementById("alerta-email");
        const alertaSenha = document.getElementById("alerta-senha");

        alertaCampos.classList.add("oculto");
        alertaEmail.classList.add("oculto");
        alertaSenha.classList.add("oculto");
        
        if (email == "" || senha == "") {
            alertaCampos.classList.remove("oculto");
            return;
        }

        const validacaoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if (!validacaoEmail.test(email)){
            alertaEmail.classList.remove("oculto");
            return;
        }

        // adicionar autenticacao - google - busca no banco de dados por email e senha
    })
}