document.addEventListener("DOMContentLoaded", function() {
    const progressElements = document.querySelectorAll('.progress');

    progressElements.forEach(progressElement => {
        const progressValue = progressElement.getAttribute('data-progress');
        const progressBar = progressElement.querySelector('.progress-bar');
        
        // Definindo a largura da barra de progresso baseada no data-progress
        progressBar.style.width = '0%';

        // Iniciando a animação após uma pequena pausa para garantir que o CSS seja aplicado
        setTimeout(() => {
            progressBar.style.transition = 'width 2s ease';
            progressBar.style.width = progressValue + '%';
        }, 100);
    });
});