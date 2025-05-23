console.log('Hello from blog.js');

// Inicialização do menu e hambúrguer
const menuToggle = document.querySelector('.header__hamburger');
const offCanvasMenu = document.querySelector('.off-canvas-menu');
const closeMenuBtn = document.querySelector('.off-canvas-menu .close-menu');

// Função para abrir o menu
const openMenu = () => {
    if (offCanvasMenu) {
        offCanvasMenu.classList.add('open');
        menuToggle.classList.add('active');
        const menuItems = offCanvasMenu.querySelectorAll('ul li a');
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, index * 100);
        });
    }
};

// Função para fechar o menu
const closeMenu = () => {
    if (offCanvasMenu) {
        offCanvasMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        const menuItems = offCanvasMenu.querySelectorAll('ul li a');
        menuItems.forEach(item => {
            item.classList.remove('show');
        });
    }
};

// Adiciona event listeners para abrir e fechar o menu
if (menuToggle && offCanvasMenu && closeMenuBtn) {
    menuToggle.addEventListener('click', () => {
        if (offCanvasMenu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    closeMenuBtn.addEventListener('click', () => {
        closeMenu();
    });

    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !offCanvasMenu.contains(event.target)) {
            closeMenu();
        }
    });
}

// Funcionalidade do Modal
const modal = document.getElementById("myModal");
const btnIcons = document.querySelectorAll(".card-cta-modal-button");
const span = document.getElementsByClassName("close")[0];

// Verifica se os botões e o modal estão presentes e adiciona event listeners
if (modal && btnIcons.length > 0 && span) {
    btnIcons.forEach(btnIcon => {
        btnIcon.addEventListener('click', () => {
            modal.style.display = "block";
        });
    });

    span.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
