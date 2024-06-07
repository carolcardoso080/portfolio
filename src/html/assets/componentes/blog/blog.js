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

export class BlogPtBr extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do BlogPtBr");
        carregarHTML('./assets/componentes/blog/blog.html', 'blog-pt-br', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class BlogEn extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do BlogEn");
        carregarHTML('./assets/componentes/blog/blog.html', 'blog-en', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

export class BlogIt extends HTMLElement {
    constructor() {
        super();
        console.log("Constructor do BlogEs");
        carregarHTML('./assets/componentes/blog/blog.html', 'blog-it', conteudo => {
            this.appendChild(conteudo);
            this.dispatchEvent(new CustomEvent("carregou"));
        });
    }
}

customElements.define('br-blog-pt-br', BlogPtBr);
customElements.define('br-blog-en', BlogEn);
customElements.define('br-blog-it', BlogIt);
