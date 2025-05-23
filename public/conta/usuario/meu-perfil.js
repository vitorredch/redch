document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login-button");
    const cadastroButton = document.querySelector("#cadastrar");
    const linkCadastro = document.querySelector("#link-cadastro");
    const linkLogin = document.querySelector("#link-login");
    const dropdownUsuario = document.querySelector(".dropdown-usuario");
    const dropdownCadastro = dropdownUsuario.querySelector(".dropdown-cadastro");

    // Alterna para o formulário de cadastro
    linkCadastro.addEventListener("click", (event) => {
        event.preventDefault();
        dropdownUsuario.querySelector(".login-input").value = ""; // Limpa os campos
        dropdownUsuario.querySelector(".login-input[type='password']").value = ""; // Limpa os campos
        dropdownUsuario.querySelector(".dropdown-title").innerText = "Cadastro";
        dropdownCadastro.style.display = "block";
        dropdownUsuario.querySelector(".login-input").parentElement.style.display = "none"; // Esconde o formulário de login
    });

    // Volta para o formulário de login
    linkLogin.addEventListener("click", (event) => {
        event.preventDefault();
        dropdownUsuario.querySelector(".login-input").value = ""; // Limpa os campos
        dropdownUsuario.querySelector(".login-input[type='password']").value = ""; // Limpa os campos
        dropdownUsuario.querySelector(".dropdown-title").innerText = "Usuário";
        dropdownCadastro.style.display = "none";
        dropdownUsuario.querySelector(".login-input").parentElement.style.display = "block"; // Mostra o formulário de login
    });

    // Lógica de Cadastro
    cadastroButton.addEventListener("click", function () {
        const nome = dropdownCadastro.querySelector('.cadastro-input[placeholder="Nome"]').value;
        const email = dropdownCadastro.querySelector('.cadastro-input[placeholder="E-mail"]').value;
        const senha = dropdownCadastro.querySelector('.cadastro-input[placeholder="Senha"]').value;
        const confirmarSenha = dropdownCadastro.querySelector('.cadastro-input[placeholder="Confirmar Senha"]').value;

        // Validação simples
        if (senha !== confirmarSenha) {
            alert('As senhas não conferem.');
            return;
        }

        // Simulação de cadastro
        alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nE-mail: ${email}`);
        
        // Limpar campos após cadastro
        dropdownCadastro.querySelector('.cadastro-input[placeholder="Nome"]').value = '';
        dropdownCadastro.querySelector('.cadastro-input[placeholder="E-mail"]').value = '';
        dropdownCadastro.querySelector('.cadastro-input[placeholder="Senha"]').value = '';
        dropdownCadastro.querySelector('.cadastro-input[placeholder="Confirmar Senha"]').value = '';

        // Voltar para a tela de login
        dropdownCadastro.style.display = 'none'; // Esconde o formulário de cadastro
        dropdownUsuario.querySelector(".login-input").parentElement.style.display = "block"; // Mostra o formulário de login
    });
});
