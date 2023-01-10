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


const destino = prompt("Ingrese el destino de su viaje");

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
