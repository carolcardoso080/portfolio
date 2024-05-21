// Adicione um evento de "DOMContentLoaded" para garantir que o DOM foi carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
  const TOGGLE = document.querySelector('header-component').shadowRoot.getElementById('toggle');
  const REFRESH = document.querySelector('header-component').shadowRoot.getElementById('refresh');
  const THEME = window.localStorage.getItem("theme");

  // Verifique se o tema é escuro e aplique a classe 'dark' ao body se necessário
  if (THEME === "dark") document.body.classList.add("dark");

  // Adicione os event listeners para os botões dentro do componente de header
  TOGGLE.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      // Alterne entre os temas e armazene o estado no localStorage
      if (document.body.classList.contains("dark")) {
          window.localStorage.setItem("theme", "dark");
      } else {
          window.localStorage.setItem("theme", "light");
      }
  });

  REFRESH.addEventListener("click", () => {
      window.location.reload(); // Recarregue a página ao clicar no botão de refresh
  });

  let count = 1;
  document.querySelector('header-component').shadowRoot.getElementById("radio1").checked = true;

  // Função para alternar automaticamente as imagens do slider
  setInterval(function () {
      nextImage();
  }, 2000);

  function nextImage() {
      count++;
      if (count > 4) {
          count = 1;
      }
      document.querySelector('header-component').shadowRoot.getElementById("radio" + count).checked = true;
  }
});
