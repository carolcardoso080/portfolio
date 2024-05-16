export class header extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do header.js");

        console.log(`URL do header.js: ${import.meta.url}`)
        fetch('./assets/componentes/header/header.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-header', header);