const contenedor = document.querySelector('.contenedor');

const parrafo = document.createElement('P').innerHTML = "Parrafo";
const h2_nuevo = document.createElement('H2');
h2_nuevo.innerHTML = "Tiutulo"

const h2_antiguo = document.querySelector('.h2');

// contenedor.replaceChild(h2_nuevo, h2_antiguo);

// contenedor.removeChild(h2_antiguo);

let respuesta = contenedor.hasChildNodes();

if (respuesta) {
    document.write("El contenedor tiene hijos");
} else {
    document.write("El contenedor no tiene hijos");
};