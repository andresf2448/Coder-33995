/* 
estructura de una funcion

function nombreFuncion(){
  codigo de la funcion
}
*/

/* function saludar(){
  let nombre = prompt("Ingrese su nombre");
  let mensaje = `Hola ${nombre}`;
  alert(mensaje);
}

saludar(); */

/* 
funciones con parametros
function nombreFuncion(par1, par2, ..., parn){
  codigo a ejecutar por la funcion
}
*/

/* function sumar(numero1, numero2){
  let suma = numero1 + numero2;

  alert(suma);
}

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

sumar(numero1, numero2); */

/* function calculadora(numeroUno, numeroDos, operacion) {
  switch (operacion) {
    case "+":
      console.log(numeroUno + numeroDos);
      break;

    case "-":
      console.log(numeroUno - numeroDos);
      break;

    case "*":
      console.log(numeroUno * numeroDos);
      break;

    case "/":
      console.log(numeroUno / numeroDos);
      break;

    default:
      console.log("operacion no definida");
      break;
  }
}

calculadora(2, 4, "+"); */

/* function suma(x, y){
  return x + y;
}

let resultado = suma(3, 5);
console.log(resultado); */

/* function carrito(nombre){
  return `en 5 minutos su hij@ ${nombre} va a estar en la escuela`;
}

let nombre = prompt("Ingrese el nombre");
let mensaje = carrito(nombre);
alert(mensaje); */

/* function calculadora(numeroUno, numeroDos, operacion) {
  switch (operacion) {
    case "+":
     return numeroDos + numeroUno;
      break;

    case "-":
      return numeroDos - numeroUno;
      break;

    case "*":
      return numeroDos * numeroUno;
      break;

    case "/":
      return numeroDos / numeroUno;
      break;

    default:
      return "operacion no definida";
      break;
  }
}

let numero1 = parseInt(prompt("Ingrese el numero"));
let numero2 = parseInt(prompt("Ingrese el numero"));
let resultado = calculadora(numero1, numero2, "-");
alert(resultado); */

/* function saludar(){
  console.log("hola");
  return
  console.log("chao");
}

saludar(); */


/* function esPar(numero){
  let resultado;
  if(numero % 2 === 0){
    resultado = "El numero es par";
  }else{
    resultado = "El numero es impar"
  }

  return resultado;
}

let mensaje = esPar(11);
console.log(mensaje); */

/* function saludar(){
  let resultado = "Hola";

  console.log(resultado);
}

saludar();
console.log(resultado); */

/* function sumar(){
  let resultado = 5 + 6;
  return resultado;
}

function restar(){
  let resultado = 5 - 6;
  return resultado;
} */

/* const suma  = function (a, b) { return a + b };
const resta = function (a, b) { return a - b };

console.log(suma(4,5)); */

/* const suma = (num1, num2) => {
  return num1 + num2;
};
console.log(suma(4,5)); */
/* saludo();

function saludo(){
  console.log("Hola");
} */

/* saludo1();
const saludo1 = () => "Hola"; */

/* const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;

let precio = 1000;
let descuento = 100;

let nuevoPrecio = resta(suma(precio, iva(precio)), descuento);
                = resta(suma(1000, iva(1000)), 100);
                = resta(1000 + 1000 * 0.21, 100);
                = (1000 + 1000 * 0.21) - 100
                = 1110;
 */

/* function asdf(){
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let nombre;
  }

  nombre
} */

let nombre;

