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
    
    // Validação do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validação simples
            if (name && email && message) {
                alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
    
    // Validação do Formulário de Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                alert(`Obrigado por assinar nossa newsletter! Um e-mail de confirmação foi enviado para ${email}.`);
                this.reset();
            } else {
                alert('Por favor, insira um endereço de e-mail válido.');
            }
        });
    }
    
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
        const elements = document.querySelectorAll('.feature-card, .member, .form-group');
        
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
    document.querySelectorAll('.feature-card, .member').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    document.querySelectorAll('.form-group').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(' + (index % 2 === 0 ? '-' : '') + '20px)';
        element.style.transition = 'opacity 0.5s ease ' + (index * 0.1) + 's, transform 0.5s ease ' + (index * 0.1) + 's';
    });
    
    // Dispara a animação quando a página carrega
    window.addEventListener('load', animateOnScroll);
    
    // Dispara a animação ao rolar
    window.addEventListener('scroll', animateOnScroll);
});