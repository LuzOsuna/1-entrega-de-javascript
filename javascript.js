// let nombreIngresado = prompt("Ingrese su nombre")
// console.log ("nombreIngresado")

// alert("Bienvenido")

//Ejemplo scrip completo

// let entrada = prompt("Ingresar nombre de usuario");
// let salida = "Bienvenido/a" + " " + entrada;
// alert (salida);

// let nombreIngresado = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresar apellido");
// let edadIngresada = prompt("Ingresar edad");

// if ((nombreIngresado !="") && (apellidoIngresado !="") && (edadIngresada <= 18)){
//     alert("Nombre: " +" " +nombreIngresado+"Apellido:" + " " +apellidoIngresado) ;

// }else{
//     alert("Error: Ingresar nombre y Apellido")
// }

// COMPLEJO DE HOTELES


const destino = prompt("INGRESE EL DESTINO DE SU VIAJE");

if ((destino == "Mar del Plata") || (destino == "mar del plata")||(destino == "Mar del plata")){
    console.log("Se seleccione Mar del Plata como destino");
    alert("Se selecciono Mar del Plata como destino");

} else if ((destino == "San Carlos de Bariloche") ||(destino == "san carlos de bariloche")||(destino =="Bariloche")){
    console.log("Se selecciono San Carlos de Bariloche como destino");
    alert("Se selecciono San Carlos de Bariloche como destino");

} else if ((destino == "Villa Carlos Paz") ||(destino == "villa carlos paz")||(destino =="Villa carlos paz")){
    console.log("Se selecciono Villa Carlos Paz como destino");
    alert("Se selecciono Villa Carlos Paz como destino");

} else {

    console.log("No hay resultados para su destino")
    alert("No hay resultados para su destino ")
}



// let huesped = " ";
// while(huesped !=="salir"){

//     let hospedaje = prompt("Vuelva a ingresar el destino");
//     while (hospedaje !== "Mar del plata" || hospedaje !== "San Carlos de Bariloche" || hospedaje !== "Villa Carlos Paz" || hospedaje !== "San Rafael") {
//         console.log (" ")

//         hospedaje = prompt("ingrese CORRECTAMENTE el destino")

//     }
// }
// //Le pido al usuario las dias de hospedaje 
//  const diasdeHospedaje = pasrseInt(prompt("Ingrese la cantidad de dias que se va a hospedar"));

//  //Calcular costo de hospedaje
//  let costo=0;
//  switch(hospedaje){
//     case "Mar del Plata":
//         costo = diasdeHospedaje * 15000;
//         break;

//     case "San Carlos de Bariloche":
//         costo = diasdeHospedaje * 30000; 
//         break;
        
//     case "Villa Carlos Paz": 
//          costo = diasdeHospedaje * 20000;
//          break;
         
//     case "San Rafael":
//         costo = diasdehospedaje * 25000;
//         break;         
//  }

//  console.log ("El huesped del hospedaje" + hospedaje + " por " + diasdeHospedaje + " Le cuesta: $" + costo);


// SWITCH
let entrada = prompt("Ingresar fecha(DD/MM/AAAA) | Ingresar ESC para salir");

while(entrada!= "ESC"){
    switch(entrada){
        case "22/01/2023":
            console.log("La fecha seleccionada se encuentra disponible")
            alert("La fecha seleccionada se encuentra esta disponible");
            break;
        case "05/02/2023":
            console.log("La fecha seleccionada se encuentra disponible")
            alert("La fecha seleccionada se encuentra disponible");
            break;
        case "15/02/2023":
            console.log("La fecha seleccionada se encunetra disponible")
            alert("La fecha seleccionada se encuentra disponible");
            break;
        default:
            alert("Fecha no disponible")
            break;

    }
    entrada = prompt("Ingresar fecha (DD/MM/AAAA)")
}