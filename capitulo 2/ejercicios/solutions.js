
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

let cantidad = prompt("¿Cuántos alumnos son?");
let alumnosTotales = [];

for(i = 0; i < cantidad; i++){
  alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p) => { 
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P") {
    alumnosTotales[p][1]++;
  }
}

for(i = 0; i < 30; i++){
  for(alumno in alumnosTotales){
    tomarAsistencia(alumnosTotales[alumno][0],alumno);
  }
}

for (alumno in alumnosTotales){
  let resultado = `${alumnosTotales[alumno][0]}:<br>
  ______Presentes: ${alumnosTotales[alumno][1]} <br>
  ______Ausencias: ${30 - alumnosTotales[alumno][1]}
  `;
  if (30 - alumnosTotales[alumno][1] > 18){
    resultado+= "REPROBADO POR INASISTENCIAS";
  } else {
    resultado+= "<br>";
  }
  document.write(resultado);
}

// Ejercicio 3

const sumar = (num1,num2)=>{
  return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
  return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
  return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
  return parseInt(num1) * parseInt(num2);
}

alert("¿Que operacion deas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación");

if (operacion == 1) {
  let num1 = prompt("Primer número");
  let num2 = prompt("Segundo número");
  resultado = sumar(num1,num2);
  alert(`El resultado es: ${resultado}`);
}
 else if (operacion == 2) {
  let num1 = prompt("Primer número");
  let num2 = prompt("Segundo número");
  resultado = restar(num1,num2);
  alert(`El resultado es: ${resultado}`);
}
else if (operacion == 3) {
  let num1 = prompt("Primer número");
  let num2 = prompt("Segundo número");
  resultado = dividir(num1,num2);
  alert(`El resultado es: ${resultado}`);
}
else if (operacion == 4) {
  let num1 = prompt("Primer número");
  let num2 = prompt("Segundo número");
  resultado = multiplicar(num1,num2);
  alert(`El resultado es: ${resultado}`);
}
else {
  alert("No es una opción válida");
}
