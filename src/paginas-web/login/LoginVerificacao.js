function validarCampoVazio() {
    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (nome !== undefined) {
        return nome !== "" && email !== "" && senha !== "";
    }

    return email !== "" && senha !== "";
}

function validarNome() {
    const nome = document.getElementById("nome").value.trim().replace(/\s{2,}/g, " ");
    const validacaoNome = /^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)+$/;

    if (validacaoNome.test(nome) && nome.length >= 5 && nome.length <= 30) {
        return nome;
    }

    return false;
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const validacaoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (validacaoEmail.test(email)) {
        return email;
    }

    return false;
}

function validarSenha() {
    const senha = document.getElementById("senha").value.trim();
    const validacaoSenha = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&+_-])[A-Za-z\d@$!%*?&+_-]+$/;

    if (validacaoSenha.test(senha) && senha.length >= 8 && senha.length <= 30) {
        return senha;
    }

    return false;
}

function exibirAlerta(id, visivel) {
    const alerta = document.getElementById(id);
    alerta.style.visibility = visivel ? "visible" : "hidden";
}

function verificarCriarConta() {
    document.getElementById("login").addEventListener("submit", function (evento) {
        evento.preventDefault();

        exibirAlerta("alerta-campos", false);
        exibirAlerta("alerta-nome", false);
        exibirAlerta("alerta-email", false);
        exibirAlerta("alerta-senha", false);

        if (!validarCampoVazio()) {
            exibirAlerta("alerta-campos", true);
            return;
        }

        const nome = validarNome();
        if (!nome) {
            exibirAlerta("alerta-nome", true);
            return;
        }

        const email = validarEmail();
        if (!email) {
            exibirAlerta("alerta-email", true);
            return;
        }

        const senha = validarSenha();
        if (!senha) {
            exibirAlerta("alerta-senha", true);
            return;
        }

        // Criar objeto com os valores validados
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        // TODO - código para inserir dados no banco de dados
        // adicionar autenticação - google
    });
}

function verificarEntrarConta() {
    document.getElementById("entrar-conta").addEventListener("submit", function (evento) {
        evento.preventDefault();

        exibirAlerta("alerta-campos", false);
        exibirAlerta("alerta-email", false);
        exibirAlerta("alerta-senha", false);

        if (!validarCampoVazio()) {
            exibirAlerta("alerta-campos", true);
            return;
        }

        const email = validarEmail();
        if (!email) {
            exibirAlerta("alerta-email", true);
            return;
        }

        const senha = validarSenha();
        if (!senha) {
            exibirAlerta("alerta-senha", true);
            return;
        }

        // Criar objeto com os valores validados
        const credenciais = {
            email: email,
            senha: senha
        };

        // TODO - código para verificar a correspondência email e senha
        // adicionar autenticação - google - busca no banco de dados por email e senha
    });
}

function mudarTipoSenha() {
    const senha = document.getElementById('senha');
    const olhoSenha = document.getElementById('olho-senha-icone');
    
    if (senha.type === 'password') {
        senha.type = 'text';
        olhoSenha.src = '/assets/icones-login/olho-aberto-senha-icone.png';
    } else {
        senha.type = 'password';
        olhoSenha.src = '/assets/icones-login/olho-fechado-senha-icone.png';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById("login")) {
        verificarCriarConta();
    }

    if (document.getElementById("entrar-conta")) {
        verificarEntrarConta();
    }


});
