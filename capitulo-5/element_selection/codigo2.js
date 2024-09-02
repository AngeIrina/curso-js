// Metodos para definir, obtebet y eliminar atributos de un elemento

const rangoEtario = document.querySelector(".rangoEtario");

rangoEtario.setAttribute("type", "number");

valorDelAtributo = rangoEtario.getAttribute("type");
document.write(valorDelAtributo);

valorDelAtributo = rangoEtario.removeAttribute("type");


