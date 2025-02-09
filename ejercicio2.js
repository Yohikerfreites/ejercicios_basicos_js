// 2.1
// const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...
const jedi = { nombre: 'Luke Skywlker', edad: 25 }
console.log(jedi.edad)

//2.2
const nombre = 'Leia'
const apellido = 'Organa'
const edad = 20

const frase = "Soy " + (nombre) + ' ' + (apellido) + ", tengo " + (edad) + " años y soy una princesa de Alderaan.";

console.log(frase);


//2.3 

const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

// Tu código para calcular el precio total aquí...
const precioTotal = (sable1.precio + sable2.precio)

console.log(precioTotal);

//2.4
// let precioBaseGlobal = 10000;
let precioBaseGlobal = 25000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 75000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 95000 };

// Tu código para actualizar el precio final de cada nave aquí...
const sumaNave1 = (precioBaseGlobal + (nave1.precioBase));
const sumaNave2 = (precioBaseGlobal + (nave2.precioBase));

console.log(sumaNave1); // 75000
console.log(sumaNave2); // 95000
