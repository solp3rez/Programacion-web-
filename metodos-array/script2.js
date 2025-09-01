
const arrayNumeros = [1,2,3,4,5,6];


//Metodos

//push -> Agrega un elemento al final del array(append en python)

arrayNumeros.push(10);
console.log(arrayNumeros[6]);

console.log(arrayNumeros);

//pop elimina elimina el ultimo elemento de un arreglo

const ultimo = arrayNumeros.pop();
console.log("Ultimo", ultimo);

console.log(arrayNumeros);

//shift elimina el primer valor de un arreglo, tambien lo guarda

const primero = arrayNumeros.shift();
console.log("Primero", primero);

console.log(arrayNumeros);

//unshift(valor) Agregar un elemento al principio del arreglo

arrayNumeros.unshift("fede");

console.log(arrayNumeros);

//map(funcion) Crea un nuevo arreglo aplicando una funcion a cada elemento

const nuevoArreglo = arrayNumeros.map((item) => {
    return item += 1;
});
console.log(nuevoArreglo)

//filter Crea un nuevo array con los elementos que cumplan la condicion

const pares = arrayNumeros.filter((n) => n%2 === 0);

console.log(pares);

//ForEach solamente recorre un arreglo 
//podemos ver item, index y array completo

arrayNumeros.forEach((item, index, array) => console.log(item, index, array));