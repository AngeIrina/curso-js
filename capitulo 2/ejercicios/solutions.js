
// Ejercicio 1

let free = false;

const validarCliente = (time) => {
  let edad = prompt("¿Cuál es tu edad?");
  if (edad > 18) {
    if (time >= 2 && time < 7 && free == false) {
      alert("Puedes pasar gratis porque eres la primera persona después de las 2am");
      free = true;
    } else {
      alert(`Son las ${time}:00hrs y puedes pasar pero tienes que pagar la entrada`);
    }
  } else {
    alert("Sos menor de edad, no puedes pasar");
  }
};

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(10);


// Ejercicio 2


