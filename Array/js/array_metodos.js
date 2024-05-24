/* Métodos de array */
/* Matriz = método; para que no te confundas */

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

/* Método JS() */
/* Con at() llama la matriz según la posición (Es igual que con [], es una manera de deemplazar los corchetes) */
const var3 = [1,2,3,4,5];
let atscript = var3.at(2);
console.log(atscript)

/* 
 




Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()*/

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