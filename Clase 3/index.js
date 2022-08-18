/* 
estructura del for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/
// i++,      i = i + 1

/* for(let i = 0; i < 3; i++){
  alert("hola");
}

alert("terminamos"); */

/* let numero = parseInt(prompt("Ingreser un numero"));

for(let i = 0; i <= 10; i++){
  let resultado = numero * i;
  let mensaje = `${numero} * ${i} = ${resultado}`;
  alert(mensaje);
} */

/* for(let i = 0; i <= 10; i++){
  let nombre = prompt("Ingrese su nombre");
  let mensaje = `Turno #${i} Nombre: ${nombre}`;
  alert(mensaje);
}

alert("Muchas gracias, vuelvas prontos"); */

/* for(let i = 0; i <= 10; i++){
  if(i === 5){
    break;
  }

  console.log("Hola");
}

console.log("terminamos"); */

/* for(let i = 0; i <= 10; i++){
  if(i === 5 || i === 7){
    continue;
  }

  console.log(i);
}

console.log("terminamos"); */

/* let nombre = "andres";
console.log("su nombre es " + nombre);
console.log(`su nombre es ${nombre}`); */

/* let repetir = false;

while(repetir){
  console.log("hola");
} */

/* let usuario = prompt("Ingrese el usuario");

while(usuario != "andres"){
  alert("usuario incorrecto");
  usuario = prompt("Ingrese el usuario");
}

alert("Bienvenid@!!!"); */
/* let numero;

do{
  numero = parseInt(prompt("ingrese un numero"));
}while(numero != 5) */

/* let repetir = false; */

/* while(repetir){
  console.log("hola");
} */

/* do{
  console.log("Hola");
}while(repetir); */

/* 
estructura del switch
switch(valor){
  case value1:
    codigo a ejecutar
    break;
  
  case value2:
    codigo a ejecutar
    break;
    
  default:
    codigo a ejecutar
    break;
}
*/

/* let moneda = "usd";

switch(moneda){
  case "cop":
    console.log("es de colombia");
    break;

  case "ars":
    console.log("es de argentina");
    break;

  case "clp":
    console.log("es de chile");
    break;

  default:
    console.log("ingresaste una moneda diferente");
    break;
} */

/* let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN SOS?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
} */

/* let i = 0;

while(i < 10){
  console.log(i);
  i++;
} */

