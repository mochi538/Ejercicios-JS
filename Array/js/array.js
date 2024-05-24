/* Declaración de array */

/* Declaración de array vacío */
let meses = [];
/* Declaración de array con números */
const nums = [1,2];
/* Declaración de array con strings */
var caracteres = ["C1","C2" , "C3" , "María" , "Juan" ];
/* Declaración de array con booleanos */
const datos = [true, false];
/* Declaración de array mixto */
const combinado = [ 1 , false, "C4", "Jose", function(){suma= a + b}];


/* Acceder al array */

/* Llamando al indice */
const numeros = [1,2,3,4,5];
let num1 = numeros[1]; 
console.log(num1) /* Se refleja el dato de la posición indicada */

let num2 = numeros[3];
console.log(num2);

let resultado1 = numeros[0] + numeros[2];
let resultado2 = numeros[4] - numeros[1];
let resultado3 = numeros[2] * numeros[0];
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

/* Recorrer el array */
const numeros2 = [1,2,3,4,5];
for (let ejem = 0; ejem < 5; ejem++){
    console.log(numeros2[ejem])
}






