console.log('Hello from servicos.js');

// Inclua funcionalidades específicas para a página de Serviços

// Exemplo: Inicialização do menu e hambúrguer
const menuToggle = document.querySelector('.header__hamburger');
const offCanvasMenu = document.querySelector('.off-canvas-menu');
const closeMenuBtn = document.querySelector('.off-canvas-menu .close-menu');

if (menuToggle && offCanvasMenu && closeMenuBtn) {
    menuToggle.addEventListener('click', () => {
        offCanvasMenu.classList.toggle('open');
        menuToggle.classList.toggle('active');
        const menuItems = offCanvasMenu.querySelectorAll('ul li a');
        if (offCanvasMenu.classList.contains('open')) {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 100);
            });
        } else {
            menuItems.forEach(item => {
                item.classList.remove('show');
            });
        }
    });

    closeMenuBtn.addEventListener('click', () => {
        offCanvasMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        const menuItems = offCanvasMenu.querySelectorAll('ul li a');
        menuItems.forEach(item => {
            item.classList.remove('show');
        });
    });

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
