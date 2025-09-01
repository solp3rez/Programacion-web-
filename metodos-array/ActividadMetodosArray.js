//Crear 4 productos como objetos (con nombre, precio, categoria)
// y agregarlos al array con .push().

const inventario = [];

inventario.push({nombre:"Espada",oro: 150,categoria :"Epica"});
inventario.push({nombre: "Escudo",oro: 50,categoria: "Normal"});
inventario.push({nombre: "Casco",oro: 200,categoria: "Especial"});
inventario.push({nombre: "Lanza",oro: 250,categoria: "Legendario"});

console.log(inventario);

//Mostrar en consola todos los productos con forEach.

inventario.forEach((item, index) => console.log(item, index));

//Filtrar los productos que pertenezcan a la categoría "Legendario" y mostrarlos.

const cat = inventario.filter((n) => n.categoria === "Legendario");

console.log("Producto con categoria Legendaria", cat);

//Crear un nuevo array con solo los nombres de los productos, y mostrarlo en consola.

const num = inventario.map((item) => item.nombre);

console.log("nombres de los productos",num);