
    const button = document.getElementById("boton");
    
    setTimeout(() => {
     button.addEventListener("click",() => {
       alert("fui presionado despues de 3 segundos");
    });
}, 3000);

//setInterval()
let contador = 0;
setInterval(() => {
  contador++;
  console.log("contador", contador);
}, 1000);//milisegundos

//asincronia
//metodos para consumir una api
//get,post,put,delete


//fetch
//lo vamos a utilizar para conectarnos/consumir una api
//fetch(url,opciones)
//opciones es un opcional para pasar  un objeto que le diga que tipo
//de metodo utiliza, encabezado, cuerpo, etc

async function getCharacters() {
//await=espera // hasta q yo no trenga uso del fetch no puedo usar el arra  
const array = await fetch("https://rickandmortyapi.com/api/character")//entre los parentesis recibe el link
     .then ((data )=> data.json ())
     .then((Response) => console.log(Response.results));
     
//como recorremos una lista 
array.map((item) => {
  console.log(item);
});
}
