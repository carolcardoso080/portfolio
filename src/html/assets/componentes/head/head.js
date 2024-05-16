export class head extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do head.js");

        console.log(`URL do head.js: ${import.meta.url}`)
        fetch('./assets/componentes/head/head.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-head', head);