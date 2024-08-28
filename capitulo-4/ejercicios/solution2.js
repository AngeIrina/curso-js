
const obtenerInformacion = (materia) => {
    let materias = {
      fisica: ["Perez", "pedro", "Juan", "jose"],
      programacion: ["Rodriguez","pedro", "Juan", "pepito"],
      logica: ["Hernandez", "pedro", "Juan", "pepito", "jose"],
      quimica: ["Ramos", "Juan", "pepito", "jose"]
    };
    if (materias[materia] !== undefined) {
       return [materias[materia],materia,materias];
    } else {
       return materias;
    }
 }

const mostrarInformacion = (materia) => {
   let informacion = obtenerInformacion(materia);

   if (informacion !== false) {
      let profesor = informacion[0][0];
      let alumnos = informacion[0];
      alumnos.shift();
     document.write(`El profesor de ${informacion[1]} es: ${profesor} <br>
      Los alumnos son: ${alumnos} <br>`);
   }
}

const cantidaDeClases = (alumno) => {
   let informacion = obtenerInformacion();
   let clasesPresentes = [];
   let cantidadTotal = 0;
   for (info in informacion) {
      if (informacion[info].includes(alumno)) {
         cantidadTotal++;
         clasesPresentes.push(" " + info);
      }
   }
   return `<br>${alumno} esta en ${cantidadTotal} clases: ${clasesPresentes}.`;

}


mostrarInformacion("fisica");
mostrarInformacion("programacion");

document.write(cantidaDeClases("Juan"));
