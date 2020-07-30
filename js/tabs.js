

//Objeto con propiedades de Tab

let propTabs = {

    primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
    primer_contenido: document.getElementById('contenido_menu').firstElementChild,
    enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a')
}


//Objeto con métodos de Tab

let metTabs = {

    inicio: function(){
        propTabs.primer_encabezado.className = 'active';
        propTabs.primer_contenido.className = 'active';

        for (let i = 0; i < propTabs.enlaces_encabezado.length; i++) {
            propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
        }
    },

    evento: function(){
        
    }
}

metTabs.inicio();