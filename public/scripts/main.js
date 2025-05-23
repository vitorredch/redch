console.log('Hello from main.js');

// Seleciona os elementos do menu
const menuToggle = document.querySelector('.header__hamburger'); // O botão para abrir o menu
const offCanvasMenu = document.querySelector('.off-canvas-menu'); // O menu off-canvas
const closeMenuBtn = document.querySelector('.off-canvas-menu .close-menu'); // Botão de fechar o menu dentro do menu off-canvas

// Verifica se os elementos existem antes de adicionar eventos
if (menuToggle && offCanvasMenu && closeMenuBtn) {
    // Evento para abrir o menu off-canvas
    menuToggle.addEventListener('click', () => {
        offCanvasMenu.classList.toggle('open'); // Alterna a classe 'open' para exibir o menu
        menuToggle.classList.toggle('active'); // Alterna a classe 'active' ao botão hambúrguer para mudar os traços

        // Adiciona ou remove a classe 'show' com um atraso crescente para cada item do menu
        const menuItems = offCanvasMenu.querySelectorAll('ul li a');
        if (offCanvasMenu.classList.contains('open')) {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 100); // Ajuste o valor de 100ms conforme necessário
            });
        } else {
            menuItems.forEach(item => {
                item.classList.remove('show');
            });
        }
    });

    // Evento para fechar o menu off-canvas
    closeMenuBtn.addEventListener('click', () => {
        offCanvasMenu.classList.remove('open'); // Remove a classe 'open' para ocultar o menu
        menuToggle.classList.remove('active'); // Remove a classe 'active' do botão hambúrguer

        // Remove a classe 'show' de todos os itens
        const menuItems = offCanvasMenu.querySelectorAll('ul li a');
        menuItems.forEach(item => {
            item.classList.remove('show');
        });
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !offCanvasMenu.contains(event.target)) {
            offCanvasMenu.classList.remove('open');
            menuToggle.classList.remove('active');
            const menuItems = offCanvasMenu.querySelectorAll('ul li a');
            menuItems.forEach(item => {
                item.classList.remove('show');
            });
        }
    });
}
``
