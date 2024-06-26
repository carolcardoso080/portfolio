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

export class HeaderPtBr extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do HeaderPtBr");
        carregarHTML('./assets/componentes/header/header.html', 'header-pt-br', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class HeaderEn extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do HeaderEn");
        carregarHTML('./assets/componentes/header/header.html', 'header-en', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class HeaderIt extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do HeaderEs");
        carregarHTML('./assets/componentes/header/header.html', 'header-it', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

customElements.define('br-header-pt-br', HeaderPtBr);
customElements.define('br-header-en', HeaderEn);
customElements.define('br-header-it', HeaderIt);