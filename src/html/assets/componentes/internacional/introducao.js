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

export class InternacionalPtBr extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do InternacionalPtBr");
        carregarHTML('./assets/componentes/internacional/internacional.html', 'internacional-pt-br', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class InternacionalEn extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do InternacionalEn");
        carregarHTML('./assets/componentes/internacional/internacional.html', 'internacional-en', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class InternacionalIt extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do InternacionalEs");
        carregarHTML('./assets/componentes/internacional/internacional.html', 'internacional-it', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

customElements.define('br-internacional-pt-br', InternacionalPtBr);
customElements.define('br-internacional-en', InternacionalEn);
customElements.define('br-internacional-it', InternacionalIt);
