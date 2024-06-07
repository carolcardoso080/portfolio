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

export class FooterPtBr extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do FooterPtBr");
        carregarHTML('./assets/componentes/footer/footer.html', 'footer-pt-br', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class FooterEn extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do FooterEn");
        carregarHTML('./assets/componentes/footer/footer.html', 'footer-en', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class FooterIt extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do FooterEs");
        carregarHTML('./assets/componentes/footer/footer.html', 'footer-it', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

customElements.define('br-footer-pt-br', FooterPtBr);
customElements.define('br-footer-en', FooterEn);
customElements.define('br-footer-it', FooterIt);