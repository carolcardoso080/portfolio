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

// Function to add the shine effect
function addShineEffect(buttons) {
    buttons.forEach(button => button.classList.add('shine'));
    
    // Remove the shine effect after 1 second (to match the transition duration)
    setTimeout(() => {
      buttons.forEach(button => button.classList.remove('shine'));
    }, 1000); // Adjust this to match the CSS transition duration
  }
  
  // Function to repeatedly add the shine effect every 5 seconds to all buttons
  function startShineLoop() {
    const buttons = document.querySelectorAll('.shiny-button');
    
    // Add initial shine effect immediately
    addShineEffect(buttons);
    
    // Repeat every 5 seconds
    setInterval(() => addShineEffect(buttons), 5000);
  }
  
  // Start the shine loop when the page is loaded
  window.addEventListener('load', startShineLoop);
  