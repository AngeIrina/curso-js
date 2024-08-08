
// while

let numero = 0;

while (numero <= 6) {
  numero++;
  document.write(numero + "<br>");
}

// do while (primero se ejecuta y luego se evalua)

do {
    numero++;
    document.write(numero + "<br>");
}
while (numero <= 6);


// FOR IN recorre el indice(posicion) & FOR OF recorre el valor(objetos) de un array

for (let i = 0; i < 6; i++) {
    if (i == 12) {
        break; // detiene el ciclo & "continue" salta la iteracion
    }
  document.write(i + "<br>");
}

let animales = ["perro", "gato", "loro", "pez"];
for (animal in animales) {
    document.write(animal + "<br>");
}

for (animal of animales) {
    document.write(animal + "<br>");
}

// array dentro de otro array

let array1 = ["monica", "laura", "maria"];
let array2 = ["juan", "pedro",array1, "luis"];

forRancio:
for (array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
            continue forRancio;
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

