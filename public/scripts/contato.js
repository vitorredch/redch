// contato.js

console.log('Hello from contato.js');

// Exemplo de funcionalidades para a página de contato
document.addEventListener('DOMContentLoaded', () => {
    // Se houver um formulário de contato, você pode adicionar validações ou outros comportamentos aqui
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Previne o comportamento padrão de envio do formulário
            
            // Lógica para validação de formulário
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;
            
            if (name && email && message) {
                console.log('Formulário enviado:', { name, email, message });
                // Adicione a lógica para enviar o formulário aqui, se necessário
            } else {
                console.log('Por favor, preencha todos os campos.');
                // Exiba uma mensagem de erro ou destaque os campos obrigatórios
            }
        });
    }
});
