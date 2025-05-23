document.addEventListener("DOMContentLoaded", () => {
    const userDropdown = document.querySelector('.dropdown-usuario');

    // Função para mostrar o formulário de cadastro
    const showRegisterForm = () => {
        userDropdown.innerHTML = `
            <h2 class="dropdown-title">Cadastrar-se</h2>
            <input type="text" class="login-input" placeholder="Nome" required>
            <input type="email" class="login-input" placeholder="E-mail" required>
            <input type="password" class="login-input" placeholder="Senha" required>
            <input type="password" class="login-input" placeholder="Confirmar Senha" required>
            <button class="register-button">Cadastrar</button>
            <p class="back-to-login"><a href="#">Voltar ao Login</a></p>
        `;

        // Adiciona a funcionalidade para voltar ao login
        const backToLoginLink = userDropdown.querySelector('.back-to-login a');
        backToLoginLink.addEventListener('click', () => {
            showLoginForm(); // Chama a função para mostrar o formulário de login
        });

        // Adiciona a funcionalidade de cadastro
        const registerButton = userDropdown.querySelector('.register-button');
        registerButton.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o redirecionamento padrão

            const nome = userDropdown.querySelector('input[placeholder="Nome"]').value;
            const email = userDropdown.querySelector('input[placeholder="E-mail"]').value;
            const senha = userDropdown.querySelector('input[placeholder="Senha"]').value;
            const confirmarSenha = userDropdown.querySelector('input[placeholder="Confirmar Senha"]').value;

            // Validação simples
            if (nome && email && senha && senha === confirmarSenha) {
                // Armazena os dados no localStorage
                localStorage.setItem('userName', nome);
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userPassword', senha);

                // Redireciona para a página "Meu Perfil"
                window.location.href = 'meu-perfil.html'; // Verifique o caminho correto
            } else {
                alert('Por favor, preencha todos os campos corretamente e certifique-se que as senhas coincidem!');
            }
        });
    };

    // Função para mostrar o formulário de login
    const showLoginForm = () => {
        userDropdown.innerHTML = `
            <h2 class="dropdown-title">Usuário</h2>
            <input type="email" class="login-input" placeholder="E-mail" required>
            <input type="password" class="login-input" placeholder="Senha" required>
            <button class="login-button">Login</button>
            <p class="forgot-password">Esqueci minha senha</p>
            <p class="back-to-login"><a href="#">Cadastrar-se</a></p>
        `;

        // Reanexa o evento ao link "Cadastrar-se"
        attachCadastrarLinkEvent();

        // Função de login
        const loginButton = userDropdown.querySelector('.login-button');
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();

            const email = userDropdown.querySelector('input[placeholder="E-mail"]').value;
            const password = userDropdown.querySelector('input[placeholder="Senha"]').value;

            // Verifica os dados armazenados no localStorage
            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            if (email === storedEmail && password === storedPassword) {
                window.location.href = 'meu-perfil.html'; // Verifique o caminho correto
            } else {
                alert('E-mail ou senha incorretos!');
            }
        });
    };

    // Função para anexar o evento ao link "Cadastrar-se"
    const attachCadastrarLinkEvent = () => {
        const cadastrarLink = userDropdown.querySelector('.back-to-login a'); // Atualiza a referência do link
        cadastrarLink.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o redirecionamento
            showRegisterForm(); // Mostra o formulário de cadastro
        });
    };

    // Mostra o formulário de login por padrão
    showLoginForm();

    // Exibe o dropdown automaticamente ao passar o mouse no ícone de usuário
    const userIcon = document.querySelector('.icon-item img');
    userIcon.addEventListener('mouseover', () => {
        userDropdown.style.display = 'block';
    });

    // Esconde o dropdown quando o mouse sai
    userDropdown.addEventListener('mouseleave', () => {
        userDropdown.style.display = 'none';
    });
});
