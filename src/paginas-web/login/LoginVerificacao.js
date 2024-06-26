
function validarCampoVazio() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (nome === null) {
        if (email === "" || senha === "") {
            return false;
        }

    } else {
        if (nome === "" || email === "" || senha === "") {
            return false;
        }
    }
   
    return true;
}

function validarNome() {
    const nome = document.getElementById("nome").value.trim().replace(/\s{2,}/g, " ");

    const validacaoNome = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    if (!validacaoNome.test(nome) || nome.length < 5 || nome.length > 30) {
        return false;
    }
    return nome;
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();

    const validacaoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!validacaoEmail.test(email)) {
        return false;
    }
    return email;
}

function validarSenha() {
    const senha = document.getElementById("senha").value.trim();

    const validacaoSenha = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%#*?&+_-])[A-Za-z\d@$!%#*?&+_-]+$/;
    if (!validacaoSenha.test(senha) || senha.length < 8 || senha.length > 30) {
        return false;
    }
    return senha;
}

//import conexao from "../../../database/Conexao";
//import bcrypt from "bcrypt";

function verificarCriarConta() {
    document.getElementById("login").addEventListener("submit", function (evento) {
        evento.preventDefault();

        var alertaCampos = document.getElementById("alerta-campos");
        alertaCampos.style.visibility = "hidden";

        var alertaNome = document.getElementById("alerta-nome");
        alertaNome.style.visibility = "hidden";

        var alertaEmail = document.getElementById("alerta-email");
        alertaEmail.style.visibility = "hidden";

        var alertaSenha = document.getElementById("alerta-senha");
        alertaSenha.style.visibility = "hidden";

        if (!validarCampoVazio()) {
            alertaCampos.style.visibility = "visible";

            return;
        }

        const nome = validarNome();
        if (!nome) {
            alertaNome.style.visibility = "visible";

            return;
        }

        const email = validarEmail();
        if (!email) {
            alertaEmail.style.visibility = "visible";

            return;
        }

        const senha = validarSenha();
        if (!senha) {
            alertaSenha.style.visibility = "visible";

            return;
        }

        // TODO - codigo para inserir dados no banco de dados
        // adicionar autenticação - google
    });
}

function verificarEntrarConta() {
    document.getElementById("entrar-conta").addEventListener("submit", function (evento) {
        evento.preventDefault();

        const alertaCampos = document.getElementById("alerta-campos");
        alertaCampos.style.display = "none";

        const alertaEmail = document.getElementById("alerta-email");
        alertaEmail.style.display = "none";

        const alertaSenha = document.getElementById("alerta-senha");
        alertaSenha.style.display = "none";

        if (!validarCampoVazio()) {
            alertaCampos.style.display = "";

            return;
        }

        const email = validarEmail();
        if (!email) {
            alertaEmail.style.display = "";

            return;
        }

        const senha = validarSenha();
        if (!senha) {
            alertaSenha.style.display = "";

            return;
        }


        
        // TODO - codigo para verificar a correspondencia email e senha
        // adicionar autenticação - google - busca no banco de dados por email e senha
    });
}