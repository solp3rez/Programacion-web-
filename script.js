//lenguaje de programacion client-side
//actualmente orientado a funciones

//variables

var miVariable = "hola soy una variable con var"; //no se usa
let miVariable2 = "variable con let"; //solo vive en el scope declar
const miVariable3 = "constante no cambia los valores";
const hola = "hola sol";
console.log(hola); //es el equvalente a print

//funciones
function myFunction() {
  //la funcion tiene una declaraqcion,
  //en los pararentesis van los parametros
  console.log(variable);
  return; //en general las funciones van a retonar algo
}

//funcion flecha
const myArrowFunction = (variable) => variable;

//ejecucion de una funcion
myFunction(8);

const variable = true;
//condicioal con if
if (variable) {
  console.log(true);
} else {
  console, log(false);
}

//condicion ternario sirve solo para dos clausulas
variable ? console.log(true) : console.log(false);

//arreglos o arrays
//los arreglos son la lista de phyton
const arr = [1, true, "hola como va", 0, 1, 2];
console.log(`la posicion 1 del arreglo es , ${arr[1]}`);
//objetos
//los objetos con como los diccionarios en phyton
const objeto = {
  clave: "valor",
};

//los objetos estan compuestos por clave valor
console.log(objeto.clave);
