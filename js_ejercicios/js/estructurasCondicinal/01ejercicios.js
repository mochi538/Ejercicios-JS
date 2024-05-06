/* Primer ejercicio */
/* let num= parseFloat(prompt("Ingrese un número:"));
if ( num > 0 ){
    document.write(`El número ${num} es positivo`)
}else if (num < 0){
    document.write(`El número ${num} es negativo`)
}else if (nujm == 0) {
    document.write(`El número es cero`)
} else{
    document.write(`El no es válido (No es un número entero)`)
}
 */

/* Segundo ejercicio */
/* let num1= parseInt(prompt("Ingrese el primer número:"));
let num2= parseInt(prompt("Ingrese el segundo número:"));
let num3= parseInt(prompt("Ingrese el tercer número:"));

if ( num1 > num2 && num1 > num3 ){
    if(num2>num3){
        document.write(`${num1} es el número mayor ${num2} es el número del medio y ${num3} es el número menor`)
    }else{
        document.write(`${num1} es el número mayor ${num3} es el número del medio y ${num2} es el número menor`)
    }
}else if ( num2 > num1 && num2 > num3 ){
    if(num1>num3){
        document.write(`${num2} es el número mayor ${num1} es el número del medio y ${num3} es el número menor`)
    }else{
        document.write(`${num2} es el número mayor ${num3} es el número del medio y ${num1} es el número menor`)
    }
}else if ( num3 > num2 && num3 > num1 ){
    if(num1>num2){
        document.write(`${num3} es el número mayor ${num1} es el número del medio y ${num2} es el número menor`)
    }else{
        document.write(`${num3} es el número mayor ${num2} es el número del medio y ${num1} es el número menor`)
    }
}else {
    document.write("Los valores agregados no son válidos")
} */

/* Tercer ejercicio */
/* let dia= (prompt("Ingrese un día de la semana:"));

if (['lunes', 'martes', 'miércoles','jueves','viernes'].includes(dia)){
        document.write(`${dia} es un día laboral`)
    
}else if ( ['domingo', 'sábado'].includes(dia) ){
        document.write(`${dia} es un día festivo`)
}else {
    document.write("Los valores agregados no son válidos")
} */

/* Cuarto ejercicio */
/* let mes= (prompt("Ingrese un mes del año:"));

if (['diciembre','enero', 'febrero', 'marzo'].includes(mes)){
        document.write(`En ${mes} es Invierno`)
    
}else if (['marzo', 'abril', 'mayo','junio'].includes(mes)){
    document.write(`En ${mes} es Primavera`)
}else if (['junio', 'julio', 'agosto','septiembre'].includes(mes)){
    document.write(`En ${mes} es Verano`)
}else if (['septiembre', 'octubre', 'noviembre','diciembre'].includes(mes)){
    document.write(`En ${mes} es Otoño`)
}else{
    document.write("El valor agregados no es válidos")
} */

/* Quinto ejercicio */
/* let edad= parseInt(prompt("Ingrese su edad:"));

if ( edad < 18 ){
        document.write(`Usted es menor de edad`)
}else if ( edad >= 18 && edad < 62 ){
    document.write(`Usted es mayor de edad`)
}else if ( edad >= 62 ){
    document.write(`Usted es jubilado`)
}else {
    document.write("Los valores agregados no son válidos")
} */

/* Sexto ejercicio */

/* Septimo ejercicio */
/* let div1= parseInt(prompt("Ingrese el primer número:"));
let div2= parseInt(prompt("Ingrese el segundo número:"));
if (div1 % div2 == 0 ){
        document.write(`${div1} y ${div2} son divisibles entre sí`)
}else {
    document.write(`${div1} y ${9div2} no son divisibles entre sí`)
} */

/* Octavo ejrcicio */
let nota= parseFloat(prompt("Ingrese la nota del examen:"));
if ([10 , 9].includes(nota)){
        document.write("Usted obtuvo una A")
}else if ([8 , 7].includes(nota)){
    document.write("Usted obtuvo una B")
}else if ([6 , 5].includes(nota)){
    document.write("Usted obtuvo una C")
}else if ([4 , 3].includes(nota)){
    document.write("Usted obtuvo una D")
}else if ([2 , 0].includes(nota)){
    document.write("Usted obtuvo una F")
}
else {
    document.write(`${div1} y ${div2} no son divisibles entre sí`)
}