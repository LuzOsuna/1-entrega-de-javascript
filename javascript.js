
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



const destino = prompt("INGRESE EL DESTINO DE SU VIAJE");
{

if ((destino == "Mar del Plata") || (destino == "mar del plata")||(destino == "Mar del plata")){
    console.log("Se seleccione Mar del Plata como destino");
    alert("Se selecciono Mar del Plata como destino");
    console.log("No hay resultados para su destino")
    alert("No hay resultados para su destino ")
} else if ((destino == "San Carlos de Bariloche") ||(destino == "san carlos de bariloche")||(destino =="Bariloche")){
    console.log("Se selecciono San Carlos de Bariloche como destino");
    alert("Se selecciono San Carlos de Bariloche como destino");

} else if ((destino == "Villa Carlos Paz") ||(destino == "villa carlos paz")||(destino =="Villa carlos paz")){
    console.log("Se selecciono Villa Carlos Paz como destino");
    alert("Se selecciono Villa Carlos Paz como destino");
let entrada = prompt("Ingresar un horario  | Ingresar ESC para salir"); 
}
}


 //ARRRAYS & OBJETOS
 class Pasajero {
    constructor(nombre,hastaDestino,fecha,horario){
        this.nombre =nombre.toUpperCase();
        this.hastaDestino = hastaDestino.toUpperCase();
        this.fecha = parseFloat(fecha);
        this.horario = parseFloat(horario);
    }
 }

 //OBJETO
    
 const pasajero1 = new Pasajero("melina","san carlos de bariloche","05/02/2023","10:00 a.m");
 const pasajero2 = new Pasajero("cecilia","05/02/2023","san carlos de bariloche","8:00 p.m");
 const pasajero3 = new Pasajero("martina","05/02/2023","san carlos de bariloche","4:40 p.m");
 const pasajero4 = new Pasajero("erica","15/02/2023","mar del plata","8:00 a.m");

 console.log(pasajero1);

 //ARRAYS

 const datosPasajeroso = ["Mar del Plata","San Carlos de Bariloche","Villa Carlos Paz"]


 console.log(lugarDeDestino)

//FIND
 const datosPasajero = [
    {nombre: "LUCERO RIOS",
    destino: "SAN CLEMENTE DEL TUYU",
    fecha:"22/02/2023",
    horario: "22:00 hs"},
    { nombre: "AMBAR KIERN",
    destino: "SAN CARLOS DE BARILOCHE", 
    fecha:"16/02/2023", 
    horario: "19:00 hs"},
    {nombre: "ROMEO FLORES",
    destino: "MAR DEL PLATA", 
    fecha:"18/03/2023", 
    horario: "10:00 hs"},
]

const resultado = datosPasajero.find(datosPasajero=> datosPasajero.nombre == "LUCERO RIOS")