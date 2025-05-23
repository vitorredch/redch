document.addEventListener("DOMContentLoaded", () => {
    const userDropdown = document.querySelector('.dropdown-usuario');

    // Função para mostrar o formulário de cadastro
    const showRegisterForm = () => {
        userDropdown.innerHTML = `
            <h2 class="dropdown-title">Cadastrar-se</h2>
            <input type="text" class="login-input" placeholder="Nome" required>
            <input type="email" class="login-input" placeholder="E-mail" required>
            <input type="password" class="login-input" placeholder="Senha" required>
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

            // Validação simples (exemplo)
            if (nome && email && senha) {
                // Armazena os dados no localStorage
                localStorage.setItem('userName', nome);
                localStorage.setItem('userEmail', email);
                // Redireciona para a página "Meu Perfil"
                window.location.href = 'meu-perfil.html'; // Verifique o caminho correto
            } else {
                alert('Por favor, preencha todos os campos!');
            }
        });
    };

    // Função para mostrar o formulário de login
    const showLoginForm = () => {
        userDropdown.innerHTML = `
            <h2 class="dropdown-title">Usuário</h2>
            <input type="text" class="login-input" placeholder="Usuário" required>
            <input type="password" class="login-input" placeholder="Senha" required>
            <button class="login-button">Login</button>
            <p class="forgot-password">Esqueci minha senha</p>
            <p class="back-to-login"><a href="#">Cadastrar-se</a></p>
        `;
        
        // Reanexa o evento ao link "Cadastrar-se"
        attachCadastrarLinkEvent();
    };

    // Função para anexar o evento ao link "Cadastrar-se"
    const attachCadastrarLinkEvent = () => {
        const cadastrarLink = userDropdown.querySelector('.back-to-login a'); // Atualiza a referência do link
        cadastrarLink.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o redirecionamento
            showRegisterForm(); // Mostra o formulário de cadastro
        });
    };

    // Inicializa o evento no link "Cadastrar-se"
    attachCadastrarLinkEvent();
});
document.addEventListener("DOMContentLoaded", () => {
    const nomeField = document.querySelector('.user-profile .info-field input[placeholder="Digite seu nome"]');
    const emailField = document.querySelector('.user-profile .info-field input[placeholder="E-mail"]');
    
    // Recupera os dados do localStorage
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    if (userName) {
        nomeField.value = userName; // Preenche o nome
    }
    if (userEmail) {
        emailField.value = userEmail; // Preenche o e-mail, se necessário
    }
});
