document.addEventListener("DOMContentLoaded", function() {
    const progressoElements = document.querySelectorAll('.progresso');

    progressoElements.forEach(progressoElement => {
        const progressoValue = progressoElement.getAttribute('data-progresso');
        const barraProgresso = progressoElement.querySelector('.barra-progresso');
        
        // Definindo a largura da barra de progresso baseada no data-progresso
        barraProgresso.style.width = '0%';

        // Iniciando a animação após uma pequena pausa para garantir que o CSS seja aplicado
        setTimeout(() => {
            barraProgresso.style.transition = 'width 2s ease';
            barraProgresso.style.width = progressoValue + '%';
        }, 100);
    });
});
