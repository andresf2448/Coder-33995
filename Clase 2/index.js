/* 
= asignacion
== comparacion que solo valida valor
=== comparacion que valida tanto valor como tipo de dato
*/

/* 
  console.log(3 == "3");
  console.log(3 === "3");
*/

/* 
estructura del if

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}
*/

/* if(true){
  console.log("entramos al if");
}

console.log("fin del proceso"); */

/* let nombre = "Diana";

if(nombre === "Carolina"){
  console.log("Hola Diana");
}

console.log("chao Diana"); */

/* if("camila"){
  console.log("entramos");
} */

/* let numero = 19;

if(numero === 5){
  console.log("Hola 5");
}

console.log("intermedio");

if(numero === 6){
  console.log("Hola 6");
}

console.log("terminamos"); */

/* 
estructura if else
if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else{
  codigo a ejecutar en caso de que la condicion sea falsa
}
*/

/* let numero = 10;

if(numero === 30){
  console.log("eres igual a 30");
}else{
  console.log("no eres 30");
}

console.log("terminamos"); */

/* let clima = "hace sol";

if(clima === "hace sol"){
  console.log("salgo al parque");
}else{
  console.log("no salgo al parque");
}

console.log("terminamos"); */

/* let respuesta = prompt("Terminaste la tarea?");

if(respuesta.toLowerCase() === "si"){
  alert("Puedes salir a jugar");
}else{
  alert("No puedes salir a jugar");
} */

/* let edad = parseInt(prompt("Ingresa tu edad"));

if(edad < 15){
  alert("No puedes entrar");
}else if(edad < 18){
  alert("Puedes entrar con un adulto");
}else{
  alert("Puedes entrar");
}

alert("gracias por ingresar tu edad"); */
/* let numero = 5;
let valor = true;
let valorUno = numero === 10; */

/* let nombre = prompt("ingrese nombre")

if(nombre != ""){
  let mensaje = `Hola ${nombre}`;
  alert(mensaje);
} */

/* 
operadores logicos

&& solo es verdadero cuando las condiciones involucradas son verdaderas de loc ontrario sera falso

|| es verdadero cuando al menos una de las condiciones sea verdadera, de lo contrario sera falsa
*/

/* let respuestaTarea = prompt("Terminaste la tarea?");
let respuestaCasa = prompt("Organizaste la casa?");

if(respuestaTarea.toLowerCase() === "si" && respuestaCasa.toLowerCase() === "si"){
  alert("Puedes salir a jugar");
}else{
  alert("No puedes salir a jugar");
} */

let nombre = prompt("ingresa el nombre");

if((nombre == "andres" || nombre == "ANDRES") && (nombre !== "")){
  alert("Hola andres")
}else{
  alert("No ingresaste los datos correctamente");
}