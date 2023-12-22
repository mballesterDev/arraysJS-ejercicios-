let array = new Array(7); //lo podemos crear asi para que tenga una longitud al principio auqne pueda variar ya que son dinámicos
let array2 = [] //o crear asi 
j=0
for(let i=0;i<array.length;i++){
    array[i] = i+1
    
}
console.log(array);
array2[8] = "manel";
console.log(array2[8]);



//Añade uno o más elementos al final del array. push():

let array3 = [1, 2, 3];
array3.push(4);

console.log(array3);


// Elimina el último elemento del array y devuelve ese elemento. pop()
array3.pop();
console.log(array3);

// Añade uno o más elementos al inicio del array. unshift()
array3.unshift(22);
console.log(array3);

// Elimina el primer elemento del array y devuelve ese elemento. shift
let valorEliminado = array3.shift();
console.log(valorEliminado);

//concat

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let newArray = a1.concat(a2);
console.log(newArray);

//slice obtiene ciertas posiciones de un array
let arrayEntero = [22,333,555,"mamama", 20]
let arrayPartido = arrayEntero.slice(0,4) //de la posición 0 a la 4
console.log(arrayPartido);

//splice para elimianr o sustituir

let array5 = ["maneel1","maneel2","maneel3","maneel4","maneel5"];
array5.splice(1, 3); //asi para eliminar un rango de posiciones
console.log(array5);

let array6 = ["maneel1","maneel2","maneel3","maneel4","maneel5"];
array6.splice(1,2, "marc", "pere")
console.log(array6);

let array7 = ["maneel1","maneel2","maneel3","maneel4","maneel5"];
array7.splice(4,4) //para eliminar una posición específica
console.log(array7);

//index of
let array8 = ["morado", "rojo", "azul", "verde"];
let indice = array8.indexOf("azul"); //devuelve el indice sino lo encuentard evuelve -1
console.log(indice);

//filter (para buscar informacion específic)
let array9 = [1, 2, 3, 4, 100];
let newArray9 = array9.filter(item => item > 50);
console.log(newArray9);


//map
let array10 = [1, 2, 3];
let newArray10 = array.map(item => item * 2);

