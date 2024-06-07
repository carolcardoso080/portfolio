window.addEventListener("load", function() {
  const progressoElements = document.querySelectorAll('.progresso');

  progressoElements.forEach(progressoElement => {
      const progressoValue = progressoElement.getAttribute('data-progresso');
      const barraProgresso = progressoElement.querySelector('.barra-progresso');
      
      // Definindo a largura da barra de progresso baseada no data-progresso
      barraProgresso.style.width = '0%';
  });

  // Emitir evento personalizado quando o conteúdo é carregado
  const carregouEvento = new Event('carregou');
  document.dispatchEvent(carregouEvento);
});

document.addEventListener("carregou", function() {
  // Agora que o conteúdo foi carregado, iniciar a animação
  const progressoElements = document.querySelectorAll('.progresso');

  progressoElements.forEach(progressoElement => {
      const progressoValue = progressoElement.getAttribute('data-progresso');
      const barraProgresso = progressoElement.querySelector('.barra-progresso');

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
  
// Header sticky 

document.addEventListener('DOMContentLoaded', function() {
  updateHeaderStyles();
});

document.addEventListener('scroll', function() {
  updateHeaderStyles();
});

function updateHeaderStyles() {
  const header = document.querySelector('.br-header');
  const introducao = document.getElementById('introducao');
  const introducaoPosition = introducao.getBoundingClientRect().top;
  
  const headerLogoTexto = document.querySelector('.header-logo h4');
  const headerDescricao = document.querySelector('.header-sign h6');
  const navLinks = document.querySelectorAll('.br-list a');

  if (introducaoPosition <= 0) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Fundo branco
      headerLogoTexto.style.color = '#333333'; // Reseta para a cor padrão
      headerDescricao.style.color = '#333333'; // Reseta para a cor padrão
      navLinks.forEach(link => link.style.color = '#333333'); // Reseta para a cor padrão
  } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // Transparente
      headerLogoTexto.style.color = '#fff'; // Texto branco
      headerDescricao.style.color = '#fff'; // Texto branco
      navLinks.forEach(link => link.style.color = '#fff'); // Texto branco
  }
}


  