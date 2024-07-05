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

export class IntroducaoPtBr extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do IntroducaoPtBr");
        carregarHTML('./assets/componentes/introducao/introducao.html', 'introducao-pt-br', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class IntroducaoEn extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do IntroducaoEn");
        carregarHTML('./assets/componentes/introducao/introducao.html', 'introducao-en', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class IntroducaoIt extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do IntroducaoEs");
        carregarHTML('./assets/componentes/introducao/introducao.html', 'introducao-it', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

customElements.define('br-introducao-pt-br', IntroducaoPtBr);
customElements.define('br-introducao-en', IntroducaoEn);
customElements.define('br-introducao-it', IntroducaoIt);

