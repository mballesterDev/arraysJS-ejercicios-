
//haz que el usuario introduzca un nombre en una posiciín específica y ponlo en el array
/*
let nombres = ['Manel', 'Javier', 'Federico', 'Paco', 'Sofia', 'Carlos'];
let pos = parseInt(prompt('Introduce la posición donde quieres añadir el nombre'));
let r1 = prompt("Introduce el nombre que quieras ingresar");

console.log(nombres);
let arrayPartido1 = nombres.slice(0, pos);
arrayPartido1.push(r1);
let arrayPartido2 = nombres.slice(pos);
let arrayFinal = arrayPartido1.concat(arrayPartido2);
console.log(arrayFinal);

*/
let temperatuarMedia = new Array(12);

for(let i = 0; i < temperatuarMedia.length; i++){
    let tm = parseInt(prompt(`Introduzca la temperatura media del mes ${i+1}`))
    temperatuarMedia[i] = tm;
}
console.log(temperatuarMedia);

temperatuarMedia.forEach(element => {
    let asteriscos = '*'.repeat(element);
    console.log(asteriscos);
});
//no se puede usar push ya que push añade un elemento en la ultima posicion siempre 
//y si ya hay 12 predeterminadamente lo que hace es ponerlo en la poscion 13


