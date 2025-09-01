//Manipulacion del DOM
// Nos permite interactuar con documentos,
// Modificar su estructura, estilo y contenido

//Seleccion de Elementos
//Por ID

let titulo = document.getElementById("Titulo");
console.log(titulo.innerText);

//Por clase(Query Selector)

let parrafo = document.querySelector(".parrafo");

//Modificacion de Contenido

titulo.innerHTML = "Nuevo Titulo";
parrafo.textContent = "Nuevo texto en el parrafo";

//Eventos(addEventListener, onClick, onChange)

let boton = document.getElementById("boton");
boton.addEventListener("click", function () {
  alert("Boton Clickeado");
  titulo.innerHTML = "Miguel estuvo aqui";
});
