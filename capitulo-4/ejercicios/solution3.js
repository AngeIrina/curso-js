

const materias = {
      fisica: ["Perez", "pedro", "Juan", "jose"],
      programacion: ["Rodriguez","pedro", "Juan", "pepito"],
      logica: ["Hernandez", "pedro", "Juan", "pepito", "jose"],
      quimica: ["Ramos", "Juan", "pepito", "jose"]
    };


const inscribir = (alumno, materia) => {
   personas = materias[materia];
   personas.shift();
   alumnos = personas;
   if (alumno.length >= 20) {
    document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas <br>`);
   } else {
    if (materia == "fisica") {
        
    }

   }
}

inscribir("Carlos", "fisica");