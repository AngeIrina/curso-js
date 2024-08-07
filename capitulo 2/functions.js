
function saludar(){  // declaramos la función

respuesta = prompt("¡Hola! ¿Cómo fue tu dia?");
if (respuesta === "bien") {
  alert("me alegro por ti");
} else {
  alert("una pena");
}
}

saludar(); // llamamos a la función


// return

function saludar(){
    alert("Hola");
    return "¡Hola! ¿Cómo fue tu dia?"; // devuelve un valor y termina la función
}

let saludo = saludar();
document.write(saludo);


// parametros

function suma(num1, num2) {
    let res = num1 + num2;
    document.write(res + "<br>");
}

suma(5, 5); 
suma(10, 10); 


function saludar(nombre) {
    let frase = `¡Hola ${nombre}! ¿Cómo fue tu dia?`;
    document.write(frase + "<br>");
}
saludar("Juan");


const saludar = function(nombre) {
    let frase = `¡Hola ${nombre}! ¿Cómo fue tu dia?`;
    document.write(frase + "<br>");
}


const saludar = (nombre)=> { // arrow function
    let frase = `¡Hola ${nombre}! ¿Cómo fue tu dia?`;
    document.write(frase + "<br>");
}
