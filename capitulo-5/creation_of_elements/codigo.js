const contenedor = document.querySelector('.contenedor');

// const item = document.createElement('LI');
// const textDelItem = document.createTextNode('Elemento de la lista');

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
  const item = document.createElement('LI');
  item.innerHTML = "Elemento de la lista";
  fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);

console.log(fragmento);
