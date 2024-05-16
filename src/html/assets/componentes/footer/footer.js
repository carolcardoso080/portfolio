export class footer extends HTMLElement{
    
    constructor(){
        super();

        console.log ("Constructor do footer.js");

        console.log(`URL do footer.js: ${import.meta.url}`)
        fetch('./assets/componentes/footer/footer.html').then(resultado => {
            

            resultado.text().then(texto_pagina => {                            

                let template = document.createElement('template');

                template.innerHTML = texto_pagina;

                this.appendChild(template.content.cloneNode(true));
                
                this.dispatchEvent(new CustomEvent("carregou"));                
            });
        });

        

    }
}
customElements.define('br-footer', footer);