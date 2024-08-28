// Agregando las funciones de potencia, raíz cuadrada y raíz cúbica.

class Calculadora {
    constructor(){
}
sumar(num1,num2) {
    return parseInt(num1) + parseInt(num2);
  }
restar(num1,num2) {
    return parseInt(num1) - parseInt(num2);
  }
dividir(num1,num2) {
    return parseInt(num1) / parseInt(num2);
  }
multiplicar(num1,num2) {
    return parseInt(num1) * parseInt(num2);
  }
potenciar(num,exp) {
  let numero = num;
  for (var i = 1; i < exp; i++) {
    numero = numero * num;
  }
  return numero;
}
raizCuadrada(num) {
  return Math.sqrt(num);
} 
raizCubica(num) {
  return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

  alert("¿Que operacion deseas realizar?");
  const operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación, 5: potencia, 6: raiz cuadrada, 7: raiz cubica");
  
  if (operacion == 1) {
    let num1 = prompt("Primer número");
    let num2 = prompt("Segundo número");
    resultado = calculadora.sumar(num1,num2);
    alert(`El resultado es: ${resultado}`);
  }
   else if (operacion == 2) {
    let num1 = prompt("Primer número");
    let num2 = prompt("Segundo número");
    resultado = calculadora.restar(num1,num2);
    alert(`El resultado es: ${resultado}`);
  }
  else if (operacion == 3) {
    let num1 = prompt("Primer número");
    let num2 = prompt("Segundo número");
    resultado = calculadora.dividir(num1,num2);
    alert(`El resultado es: ${resultado}`);
  }
  else if (operacion == 4) {
    let num1 = prompt("Primer número");
    let num2 = prompt("Segundo número");
    resultado = calculadora.multiplicar(num1,num2);
    alert(`El resultado es: ${resultado}`);
  }
  else if (operacion == 5) {
    let num1 = prompt("Numero a potenciar");
    let num2 = prompt("Exponente");
    resultado = calculadora.potenciar(num1,num2);
    alert(`El resultado es: ${resultado}`);
  }
  else if (operacion == 6) {
    let num1 = prompt("Conocer la raiz cuadrada de");
    resultado = calculadora.raizCuadrada(num1);
    alert(`El resultado es: ${resultado}`);
  }
  else if (operacion == 7) {
    let num1 = prompt("Conocer la raiz cubica de");
    resultado = calculadora.raizCubica(num1);
    alert(`El resultado es: ${resultado}`);
  } else {
    alert("No es una opción válida");
  }




