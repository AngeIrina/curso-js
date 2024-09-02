const titulo = document.querySelector(".titulo");

// titulo.classList.add("grande");

// titulo.classList.remove("grande");

// let valor = titulo.classList.item(2);
// document.write(valor);

// nombreDeLaClase = "grande";
// let valor = titulo.classList.contains(nombreDeLaClase);
// if (valor) {
//   document.write(`La clase ${nombreDeLaClase} existe`);
//   titulo.classList.remove(nombreDeLaClase);
// } else {
//   document.write(`La clase ${nombreDeLaClase} no existe`);
//   titulo.classList.add(nombreDeLaClase);
// }

// let valor = titulo.classList.toggle("grande");
// document.write(valor);

let valor = titulo.classList.replace("grande", "chico");
document.write(valor);