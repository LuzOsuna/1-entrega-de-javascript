//VENTA DE PASAJES


function obtenerDatosDelPasajero(){

    const DestinoDelViaje = prompt("Ingrese su destino");
    console.log("Su destino es:" + " " + DestinoDelViaje);
    
    const NombreCompletoPasajero = prompt("Ingrese nombre completo del pasajero");
    console.log("Pasajero:" + " " + NombreCompletoPasajero);
    
    const FechaDelViaje = prompt("Ingrese la fecha del viaje");
    console.log("Fecha del viaje:" + " " + FechaDelViaje);
    alert("Pasajero:" + " " + NombreCompletoPasajero + " " + " " +"con destino a" +" " + DestinoDelViaje +" " +"el dia"+ " "+FechaDelViaje );
     }
     obtenerDatosDelPasajero();
     console.log("Finalizo la funcion");
    

// const destino = prompt("Seleccione un");

// if ((destino == "Mar del Plata") || (destino == "mar del plata") || (destino == "Mar del plata")) {
//     console.log("Se seleccione Mar del Plata como destino");
//     alert("Se selecciono Mar del Plata como destino");

// } else if ((destino == "San Carlos de Bariloche") || (destino == "san carlos de bariloche") || (destino == "Bariloche")) {
//     console.log("Se selecciono San Carlos de Bariloche como destino");
//     alert("Se selecciono San Carlos de Bariloche como destino");

// } else if ((destino == "Villa Carlos Paz") || (destino == "villa carlos paz") || (destino == "Villa carlos paz")) {
//     console.log("Se selecciono Villa Carlos Paz como destino");
//     alert("Se selecciono Villa Carlos Paz como destino");

// } else {

//     console.log("No hay resultados para su destino")
//     alert("No hay resultados para su destino ")
// }


let entrada = prompt("Ingresar un horario  | Ingresar ESC para salir");

while (entrada != "ESC") {
    switch (entrada) {
        case "08:00 a.m":
            console.log("El horario seleccionad se encuentra disponible")
            alert("El horario seleccionado se encuentra esta disponible");
            break;
        case "12:00 p.m":
            console.log("El horario seleccionad se encuentra disponible")
            alert("El horario seleccionad se encuentra disponible");
            break;
        case "17:00 p.m":
            console.log("El horario seleccionad se encuentra disponible")
            alert("El horario seleccionad se encuentra disponible");
            break;
        default:
            alert("Horario no disponible")
            break;

    }
    entrada = prompt("Ingresar un horario")
}
 //ARRRAYS & OBJETOS
 class Pasajero {
    constructor(nombre,destino,fecha,horario){
        this.nombre =nombre.toUpperCase();
        this.destino = destino.toUpperCase();
        this.fecha = parseFloat(fecha);
        this.horario = parseFloat(horario);
    }
 }



// funcion

//  function obtenerNumeroDeTelefono(){
// const NumeroDeTelefono = prompt("Ingrese número de télefono");
// console.log("Su numero de telefono es:" + NumeroDeTelefono);
// alert("Su número de teléfono es:" + " " + NumeroDeTelefono);

//  }
//  obtenerNumeroDeTelefono();
//  console.log("Finalizo la funcion");

 //OBJETO

//  function Pasajero(nombre,edad,fechaDelViaje,destino){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.fechaDelViaje = fechaDelViaje;
//     this.destino = destino;
//  }


//  const pasajero1 = new Pasajero("Melina",23,"05/02/2023","San Carlos de Barilocho");
//  const pasajero2 = new Pasajero("Cecilia",22,"05/02/2023","San Carlos de Bariloche");
//  const pasajero3 = new Pasajero("Martina",25,"05/02/2023","San Carlos de Bariloche");
//  const pasajero4 = new Pasajero("Erica",42,"15/02/2023","Mar del Plata");


//  console.log (pasajero2);
//  console.log(pasajero1);
//  console.log (pasajero3);
 
 //ARRAYS
 
//  const lugarDeDestino = ["Mar del Plata","San Carlos de Bariloche","Villa Carlos Paz"]

//  console.log(lugarDeDestino)


//  const listaPasajeros = [];
//  let cantidad = [5];
 
//  do{
//     let entrada = prompt("INGRESAR NOMBRE DEL PASAJERO");
//     listaPasajeros.push(entrada.toUpperCase());
//     console.log(listaPasajeros.length);
//  } while(listaPasajeros.length != cantidad)
//  const nuevaLista = listaPasajeros.concat([]);

// alert(nuevaLista.join("\n"));