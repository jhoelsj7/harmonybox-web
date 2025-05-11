// Script para manejar el botón de WhatsApp y otras interacciones
document.addEventListener('DOMContentLoaded', function() {
    // Agregar botón flotante de WhatsApp
    const whatsappFloat = document.createElement('a');
    whatsappFloat.href = 'https://wa.me/51932046967?text=Hola,%20estoy%20interesado%20en%20sus%20productos';
    whatsappFloat.className = 'whatsapp-float';
    whatsappFloat.target = '_blank';
    whatsappFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappFloat);
    
    // Animaciones para los elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .about-brief');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicialmente ocultar elementos para animación
    document.querySelectorAll('.card, .about-brief').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Event listeners
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar la página
});
