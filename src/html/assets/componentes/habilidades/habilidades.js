function carregarHTML(url, id, callback) {
    fetch(url)
        .then(resultado => resultado.text())
        .then(texto_pagina => {
            const elemento = document.createElement('div');
            elemento.innerHTML = texto_pagina;
            const componente = elemento.querySelector(`#${id}`);
            if (componente) {
                const template = document.createElement('template');
                template.innerHTML = componente.innerHTML;
                callback(template.content.cloneNode(true));
            } else {
                console.error(`Elemento com o ID ${id} não encontrado.`);
            }
        })
        .catch(error => {
            console.error('Erro ao carregar HTML:', error);
        });
}

export class HabilidadesPtBr extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do HabilidadesPtBr");
        carregarHTML('./assets/componentes/habilidades/habilidades.html', 'habilidades-pt-br', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class HabilidadesEn extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do HabilidadesEn");
        carregarHTML('./assets/componentes/habilidades/habilidades.html', 'habilidades-en', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class HabilidadesIt extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do HabilidadesEs");
        carregarHTML('./assets/componentes/habilidades/habilidades.html', 'habilidades-it', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

customElements.define('br-habilidades-pt-br', HabilidadesPtBr);
customElements.define('br-habilidades-en', HabilidadesEn);
customElements.define('br-habilidades-it', HabilidadesIt);
