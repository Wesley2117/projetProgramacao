document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle para Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Navegação entre páginas
    const pageLinks = document.querySelectorAll('[data-page]');
    const pages = document.querySelectorAll('.page');
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Fecha o menu mobile se estiver aberto
            nav.classList.remove('active');
            
            // Remove a classe active de todos os links
            pageLinks.forEach(l => l.classList.remove('active'));
            
            // Adiciona a classe active apenas ao link clicado
            this.classList.add('active');
            
            // Oculta todas as páginas
            pages.forEach(page => page.classList.remove('active'));
            
            // Mostra apenas a página correspondente
            const pageId = this.getAttribute('data-page') + '-page';
            document.getElementById(pageId).classList.add('active');
            
            // Rola para o topo da página
            window.scrollTo(0, 0);
        });
    });
    
    // Galeria de imagens - Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = this.querySelector('img').src;
            img.alt = this.querySelector('.gallery-caption').textContent;
            
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            
            lightbox.appendChild(img);
            
            // Adiciona legenda
            const caption = document.createElement('div');
            caption.className = 'lightbox-caption';
            caption.textContent = this.querySelector('.gallery-caption').textContent;
            lightbox.appendChild(caption);
        });
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });
    
    // Efeito de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação ao rolar a página
    function animateOnScroll() {
        const elements = document.querySelectorAll('.house-card, .character-card, .season, .highlight-card, .news-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configuração inicial para elementos animados
    document.querySelectorAll('.house-card, .character-card, .season, .highlight-card, .news-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Dispara a animação quando a página carrega
    window.addEventListener('load', animateOnScroll);
    
    // Dispara a animação ao rolar
    window.addEventListener('scroll', animateOnScroll);
});