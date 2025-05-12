// T E M A -- N U E V O 
//Manipulacion del DOM
//Nos permite interactuar con un documento,
//modificar estructura estilo y contenido

//seleciiona los elementos 
//defiminimos titulo 
//let se usa para variables q se modifican 
//const se usa para variables q NO se modifican
let Titulo = document.getElementById("Titulo");//agarramos el valor

//por clase (QUERY SELECTOR)
let parrafo = document.querySelector('.parrafo');//seleciona

//modificacion de contenido
Titulo.innerHTML = "I n e f a b l e ";
parrafo.textContent = "Nuevo texto en parrafo";

//eventos(addEventListener, onClick, onChange)
let boton = document.get
boton.addEventListener("click", function () {
  alert("Boton clickcleado")  
});

let lista =  []

function addTask(){
   
  const input = document.getElementById('input-task')
  const text = input.value;
  console.log(text);

  const obj = {task: text, completed:false}; 
  if(text !==""){
    lista.push(obj);
  }
const list = document.getElementById("task-list")
//crear un elemto html 
const li = document.createElement("li");
li.textContent = obj.task;
list.append(li);
}