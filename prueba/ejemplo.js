var nota = prompt("Por favor, ingresa tu nota numérica:");


nota = parseFloat(nota);

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Por favor, ingresa una nota numérica válida en el rango de 0 a 10.");
} else {
   
    var calificacion;
    if (nota >= 9.5) {
        calificacion = "A";
    } else if (nota >= 8.5) {
        calificacion = "B";
    } else if (nota >= 5.5) {
        calificacion = "C";
    } else if (nota >= 3.5) {
        calificacion = "D";
    } else {
        calificacion = "F";
    }

    
    console.log("Tu calificación equivalente en letras es: " + calificacion);
}



/* Ejercicio if else */
var nota = 2;


nota = parseFloat(nota);

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Por favor, ingresa una nota numérica válida en el rango de 0 a 10.");
} else {
   
    var calificacion;
    if (nota >= 9.5) {
        calificacion = "A";
    } else if (nota >= 8.5) {
        calificacion = "B";
    } else if (nota >= 5.5) {
        calificacion = "C";
    } else if (nota >= 3.5) {
        calificacion = "D";
    } else {
        calificacion = "F";
    }

    console.log("Tu calificación equivalente en letras es: " + calificacion);
}


for (let i = 10; i >= 1; i-- ){
    console.log(i)
}

function calificacion(letra){
    switch(letra){
        case "A":
            console.log("Excelente");
            break;
        case "B":
            console.log("Muy Bien");
            break;
        case "C":
            console.log("Bien");
            break;
        case "D":
            console.log("Mal");
            break;
        case "F":
            console.log("Reprobó");
            break;

        default: 
            console.log("Letra no valida");
    }
}
calificacion("Hola");

function fibonacci(num) {
    if (num <= 1) {
    return num;
    
    } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
    }
    }
    
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}