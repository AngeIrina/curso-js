const contenedor = document.querySelector('.contenedor');

const parrafo = document.createElement('P').innerHTML = "Parrafo";
const h2_nuevo = document.createElement('H2');
h2_nuevo.innerHTML = "Tiutulo"

const h2_antiguo = document.querySelector('.h2');


// console.log(h2_antiguo.nextElementSibling);
console.log(h2_antiguo.previousElementSibling);
