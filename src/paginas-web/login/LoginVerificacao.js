
function validarCampoVazio() {
    const alertaCampos = document.getElementById("alerta-campos");
    alertaCampos.classList.add("oculto");

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if ((nome && nome === "") || email === "" || senha === "") {
        alertaCampos.classList.remove("oculto");
        return false;
    }
    return true;
}

function validarNome() {
    const nome = document.getElementById("nome").value.trim().replace(/\s{2,}/g, " ");
    const alertaNome = document.getElementById("alerta-nome");
    alertaNome.classList.add("oculto");

    const validacaoNome = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    if (!validacaoNome.test(nome) || nome.length < 5 || nome.length > 30) {
        alertaNome.classList.remove("oculto");
        return false;
    }
    return nome;
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const alertaEmail = document.getElementById("alerta-email");
    alertaEmail.classList.add("oculto");

    const validacaoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!validacaoEmail.test(email)) {
        alertaEmail.classList.remove("oculto");
        return false;
    }
    return email;
}

function validarSenha() {
    const senha = document.getElementById("senha").value.trim();
    const alertaSenha = document.getElementById("alerta-senha");
    alertaSenha.classList.add("oculto");

    const validacaoSenha = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&+_-])[A-Za-z\d@$!%*?&+_-]+$/;
    if (!validacaoSenha.test(senha) || senha.length < 8 || senha.length > 30) {
        alertaSenha.classList.remove("oculto");
        return false;
    }
    return senha;
}

import { createConnection } from 'mysql';
import config from '../../../config';
const connection = createConnection(config);

/*
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados.');
});

// Aqui você pode executar consultas SQL e outras operações no banco de dados

connection.end();
*/

function verificarCriarConta() {
    document.getElementById("login").addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = validarNome();
        const email = validarEmail();
        const senha = validarSenha();

        if (!validarCampoVazio) {
            return;
        }

        if (!nome) {
            return;
        }

        if (!email) {
            return;
        }

        if (!senha) {
            return;
        }

        // TODO - codigo para inserir dados no banco de dados
        // adicionar autenticação - google
    });
}

function verificarEntrarConta() {
    document.getElementById("entrar-conta").addEventListener("submit", function (evento) {
        evento.preventDefault();

        const email = validarEmail();
        const senha = validarSenha();

        if (!validarCampoVazio) {
            return;
        }

        if (!email) {
            return;
        }

        if (!senha) {
            return;
        }
        
        // TODO - codigo para verificar a correspondencia email e senha
        // adicionar autenticação - google - busca no banco de dados por email e senha
    });
}