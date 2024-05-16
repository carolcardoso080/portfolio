let head = document.querySelector("br-head");
let header = document.querySelector("br-header");
let footer = document.querySelector("br-header");

function esperarPeloEventoCarregou(elemento) {
  return new Promise((resolve, reject) => {
    elemento.addEventListener("carregou", () => {
      resolve();
    });
  });
}

const promessa_carregou_head = esperarPeloEventoCarregou(head);
const promessa_carregou_header = esperarPeloEventoCarregou(header);
const promessa_carregou_footer = esperarPeloEventoCarregou(footer);

Promise.all([promessa_carregou_head, promessa_carregou_header, promessa_carregou_footer]).then(() => {
  // Adiciona o código para voltar ao topo da página
  window.scrollTo(0, 0);

  let body = document.querySelector("body");

  let script_core = document.createElement("script");
  script_core.type = "module";
  script_core.src = "../../bibliotecas/govbr-ds/core.js";

  body.appendChild(script_core);

  let script_core_init = document.createElement("script");
  script_core_init.src = "../../bibliotecas/govbr-ds/core-init.js";

  body.appendChild(script_core_init);
});
