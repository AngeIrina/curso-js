
// Ejercicio 1 (A-B)

class Celular {
  constructor(color, peso, rdp, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.tamaño = rdp;
    this.resolucionDeCamara = rdc;
    this.memoriaRam = ram;
    this.encendido = false;
  }
  presionarBotonEncendido() {
    if (this.encendido == false) {
      alert("celular prendido");
      encendido = true;
    } else {
      alert("celular apagado");
      this.encendido = false;
    }
  }
  reiniciar() {
    if (this.encendido == true) {
      alert("reiniciando celular");
    } else {
      alert("el celular esta apagado");
    }
  }
  tomarFotos() {
    alert(`foto tomada en una rsolucion de: ${this.resolucionDeCamara}`);
  }
  grabarVideo() {
    alert(`grabando video en ${this.resolucionDeCamara}`);
  }
  mobileInfo() {
    return `
    Color: ${this.color} <br> 
    Peso: ${this.peso} <br> 
    Tamaño: ${this.tamaño} <br> 
    Resolucion de camara: ${this.resolucionDeCamara} <br> 
    Memoria ram: ${this.memoriaRam} <br>
    `;
  }
}

class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("grabando video en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
   infoAltaGama(){
         return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
   }
}
// const celular1 = new Celular("rojo", "150g", "5", "HD", "1GB");
// const celular2 = new Celular("negro", "155g", "5.4", " FULL HD", "2GB");
// const celular3 = new Celular("blanco", "146g", "5.9", " FULL HD", "2GB");

const celular1 = new CelularAltaGama("rojo", "130g", "5.2", "4k", "3GB", "full hd");
const celular2 = new CelularAltaGama("negro", "140g", "5.9", "5k", "4GB", "hd");

document.write(`
    Celular 1: <br>${celular1.infoAltaGama()} <br> 
    Celular 2: <br>${celular2.infoAltaGama()} <br> 
    `);


// Ejercicio 2 

class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente")
        }
    }
    desinstalar(){
        if (this.instalada == true) {
            this.instalada = false;
            alert("App desinstalada correctamente")
        }
    }
    appInfo(){
        return `
        Descargas: ${this.descargas} <br>
        Puntuacion: ${this.puntuacion} <br>
        Peso: ${this.peso} <br>
        `;
    }

}

const app1 = new App("16.000", "5 estrellas", "900MB");
const app2 = new App("15.000", "3 estrellas", "400MB");
const app3 = new App("11.500", "2 estrellas", "100MB");
const app4 = new App("17.000", "2.5 estrellas", "1MB");
const app5 = new App("13.000", "4.5 estrellas", "250MB");
const app6 = new App("11.000", "5.3 estrellas", "390MB");
const app7 = new App("10.000", "3.5 estrellas", "522MB");

const apps = [app1, app2, app3, app4, app5, app6, app7];

let info = ""; 

for (let i = 0; i < apps.length; i++) {
    info += `${apps[i].appInfo()} <br>`;
}

document.write(info);