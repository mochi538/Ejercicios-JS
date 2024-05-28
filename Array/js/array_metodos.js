/* Métodos de array */
/* Matriz = array; para que no te confundas */

/* ----------------------Métodos básicos--------------------------- */
/* Array length: tamaño del la matriz*/
const var1 = ["Banana","Orange","Mango"];
let size = var1.length;
console.log (size)
/* Tambien se pueden agregar elemaentos al array con ayuda del length con la siguiente sintaxis */
var1[var1.length] = "Apple"
console.log(var1) 
/* Insluso cambia o reemplaza el elemento si se llama con el índice */
var1[1] = "Grape"
console.log(var1) 

/* Array toString(): devuelve las matrices separadas por comas */
const var2 = ["amarillo", "verde", "azul", "negro"];
console.log(var2.toString())
/* JS lo tiene como defecto */
console.log(var2)

/* Método JS() */
/* Con at() llama la matriz según la posición (Es igual que con [], es una manera de deemplazar los corchetes) */
const var3 = [1,2,3,4,5];
let atscript = var3.at(2);
console.log(atscript)

/* Método unir()*/
/* Imprime los datos del array al igual que toString pero con este se puede definir el separador */
let var4 = ["amarillos","los","platanos"];
console.log(var4.join(" "));

/* Los siguentes dos métodos son de estallar y empujar (pop / push) */

/* Matriz pop()*/
/* Elimina el último valor pero también puede devolverlo (estallar  y empujar)
Elimina el valor y lo devuelve a el solo */
let var5 = [  "TOMÉMONOS","UN","TINTO","SEAMOS","AMIGOS"]
let eliminar_ultimo = var5.pop();
console.log(eliminar_ultimo)
console.log(var5)

/* Matriz push() */
/* Agreaga elementos */
let var6 = ["Dolores","le","tiene","miedo","a"]
var6.push("Doloran")
console.log(var6)
/* sintaxis para lenght */
console.log(var6.push("Doloran"))

/* Elementos cambiantes */
/* Array shift() */
/* Elimina el primer valor (pop a la inversa) */
let var7 = [  "TOMÉMONOS","UN","TINTO","SEAMOS","AMIGOS"]
let eliminar_primero = var7.shift();
console.log(eliminar_primero)
console.log(var7);

/* Array unshift() */
/* Agrega un elemento nuevo al inicio (push en reversa xd) */
let var8 = ["le","tiene","miedo","a","Doloran"]
var8.unshift("Dolores")
console.log(var8)
/* sintaxis para lenght */
console.log(var8.unshift("Dolores"))


/* Array eliminar() */
/* Deja agujeros en el array (Posiciones vacias) 
PREFERIBLEMENTE NO USAR */
let var9 = [1,1,2,3,1,2,3,4,5,6,7,8,9,9,10]
delete var9[5];
console.log(var9)

/* Array concat() */
/* Fusiona dos arrays */
let var10_1 = ["Hola"]
let var10_2 = ["Mundo"]
console.log(var10_1.concat(var10_2))
console.log((var10_1.concat(var10_2)).join(" ")); /* Médtodo join :) */

/* Array copyWithin() */
/*  */
let var11 =[true, false,false]
var11.copyWithin(1,0) /* Posición en la matriz (Copia al primer índice, los elemtos del segundo índice) */
console.log(var11) 
/* No modifica la longitud de la matriz */

/* Array flat() */
/* Agrupa submatrices en una sola matriz ;) */
let var12 = [[1,2],[3,4],[5,6]];
let flat = var12.flat();
console.log(flat)

/* Array splice() */
/* Agrega elementos en la posición indicada*/
let var13 = ["Windows", "Mas OS", "Lunix","Solaris"]
var13.splice(0, 0, "Andoid", "Unix") /* El primer número indica la pocisión y la segunda los elementos que se eliminan */
console.log(var13)
console.log(var13.splice()) /* Esto no refleja nada porque no se eliminó ninguna matriz normalmente debe mostrar las matrices eliminadas */
/* Sin dejar agujeros en el array */
var13.splice(0, 3); /* 1.Posición y 2. cantidad de elementos a eliminar */
console.log(var13)

/* Array toSpliced() */
/* Modificación temporal a diferencia del metodo de arriba */
let var14 = ["Jan", "Feb", "Mar", "Apr"];
let spliced = var14.toSpliced(0, 1);

/* Array slice()*/
/* Crea una nueva matriz a vace de la anterior */
let var15 = ["Jan", "Feb", "Mar", "Apr"];
let slice = var15.slice(2); /* A partir de (), si se coloca un degundo argumento ese indica el límite pero no lo toma */
console.log(var15)
console.log(slice)

/* --------------------------------------Métodos de búsqueda --------------------- */

/*Matriz indexOf()  */
/* Devuelve la primera posicicón donde se encuentre el elemento */
let var16 = ["Apple", "Orange", "Apple", "Mango"];
let position_1 = var16.indexOf("Apple") 
console.log(position)
/* Si no encuentra el elemento devuelve -1 */

/* Matriz lastIndexOf() */
/* Devuelve la última posicicón donde se encuentre el elemento */
let var17 = ["Apple", "Orange", "Apple", "Mango"];
let position_2 = var17.lastIndexOf("Apple") 
console.log(position_2)

/* Matriz incluye() */
/* Devuelve true si el elemento se encuentra en la matriz, false en caso contrario */
let var18 = ["Apple", "Orange", "Apple", "Mango"];
let position_3 = var18.includes("Apple") 
console.log(position_3)

/* Matriz buscar() */
/* Devuelve el índice de la primera ocurrencia del elemento buscado en la matriz*/
/* Solo con funciones */
let var19 = [1,2,3,4,5,6,7,8,9];
let position_4 = var19.find(funcion1);
console.log(position_4)
function funcion1(value,index,array){
    return value > 3
}

/* Matriz findIndex() */
/* Devuelve ls posición del primer valor que pasa por la función de prueba*/
let var20 = [1,2,3,4,5,6,7,8,9];
let position_5 = var20.findIndex(funcion2);
console.log(position_5)
function funcion2(value,index,array){
    return value > 3
}

/* Matriz findLast() */
/* Pendiente */
let var21 = [1,2,3,4,5,6,7,8,9];
let position_6 = var21.findLast(funcion3);
console.log(position_6)
function funcion3(value,index,array){
    return value > 3}
/* Matriz findLastIndex() */



/* -------------------------Clasificación de matrices----------------------------- */
/* 
Array sort() Ordena alfabeticamente
Array inverso () Invierte el array


Array toSorted() Ordena 
Array toReversed()
Ordenar objetos
 */



let numeros = [1,2,3,4,5,6,7,8,9]

function funcion(){

}



/* Exposición------------- */
let frutas=["naranja","manzana","pera","banana"]
console.log(frutas.lenght);
