/* 1. Contar vocales en una cadena*/
/* Escribe una función que reciba una cadena y cuente el número de vocales*/
function contarVocales(string) {
    const text = string.toLowerCase();
    const vocales = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'u', 'ú'];

    let contador = 0;

    for (let i = 0; i < text.length; i++) {
        if (vocales.includes(text[i])) {
            contador++;
        }
    }

    return contador;
    }


console.log("Ejercicio 1: Contar vocales en una cadena");
console.log("//////////")


console.log("Solución 1");
console.log("Texto: Esta es una prueba de conteo de vocales");
console.log("Vocales: ", contarVocales("Esta es una prueba de conteo de vocales"));
console.log("----------");

console.log("Solución 2");
console.log("Texto: En la prueba 3 vamos a probar una palabra que tenga tildes");
console.log("Vocales: ", contarVocales("En la prueba 3 vamos a probar una palabra que tenga tildes"));
console.log("----------");

console.log("Solución 3");
console.log("Texto: Día");
console.log("Vocales (deberíamos obtener 2): ", contarVocales("Día"));
console.log("----------")

console.log("//////////");


/* 2. Muestra el mayor número de un array */
/* Escribe una función que itere un array wn JavaScript y devuelva el número más alto */
function mayorNum(array) {
    if (array.length === 0) {
        return null;
    }

    let mayor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}  

console.log("Ejercicio 2: Muestra el mayor número de un array");
console.log("//////////");

console.log("Solución 1");
let arrayNum1 = [2 ,5 ,8 ,25 ,6 ,32 ,14 ,59 ,56 ,1055];
console.log("Array naturales: ", arrayNum1);
console.log("El número mayor encontrado es: ", mayorNum(arrayNum1));
console.log("----------")

console.log("Solución 2");
let arrayNum2 = [-96, -58, -25, -32, -74];
console.log("Array enteros negativos: ", arrayNum2);
console.log("El número mayor encontrado es: ", mayorNum(arrayNum2));
console.log("----------");

console.log("Solución 3");
let arrayNum3 = [3.2, 6.5, -8.6, 10.9, 11.2];
console.log("Array números con coma: ", arrayNum3);
console.log("El número mayor encontrado es: ", mayorNum(arrayNum3));
console.log("----------");

console.log("//////////");


/* 3. Calcular la media de un array de números */
/* Escribe una función que tome un array de números y devuelva el número más alto */

function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return 0; //evita dividir por cero en caso que el array esté vacío
    }

    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / numeros.length;
}

console.log("Ejercicio 3: Calcular la media de un array de números");
console.log("//////////");

console.log("Solución 1");
let arrayNumeros = [10, 20, 30, 40, 50];
console.log("La media del array ", arrayNumeros, " es: ", calcularMedia(arrayNumeros));
console.log("----------");

console.log("Solución 2");
let arrayNumeros2 = [125, 250, 340, 45, 55];
console.log("La media del array ", arrayNumeros2, " es: ", calcularMedia(arrayNumeros2));
console.log("----------");

console.log("Solución 3");
let arrayNumeros3 = [98, 145, 3225, 5, 632, 120];
console.log("La media del array ", arrayNumeros3, " es: ", calcularMedia(arrayNumeros3));
console.log("----------");

console.log("//////////");


/* 4. Invertir los elementos de un array */
/* Escribe una función que reciba un array y devuelva el mismo array, pero con los elemntos invertidos */

function invertirArray(array) {
    return array.reverse();
}

console.log("Ejercicio 4: Invertir los elementos de un array");
console.log("//////////");

console.log("Solución 1");
const arrayOriginal1 = [1, 2, 3, 4, 5];
const arrayInvertido1 = [...arrayOriginal1].reverse();
console.log("El array original es: ", arrayOriginal1, " y el invertido es: ", arrayInvertido1);
console.log("----------");

console.log("Solución 2");
const arrayOriginal2 = [25, 35, 45 ,55 ,65 ,85];
const arrayInvertido2 = [...arrayOriginal2].reverse();
console.log("El array original es: ", arrayOriginal2, " y el invertido es: ", arrayInvertido2);
console.log("----------");

console.log("Solución 3");
const arrayOriginal3 = [9 ,8 ,7 ,6 ,5];
const arrayInvertido3 = [...arrayOriginal3].reverse();
console.log("El array original es: ", arrayOriginal3, " y el invertido es: ", arrayInvertido3);
console.log("----------");

console.log("//////////");


/* 5. Eliminar elementos duplicados de un array */
/* Escribe una función que reciba un array y elimine los elementos duplicados, devolviendo un nuevo array */

function removerDuplicados(array){
    return [...new Set(array)];
}

console.log("Ejercicio 5: Remover duplicados de un array");
console.log("//////////");

console.log("Solución 1");
const originalArray1 = [1, 2, 2, 3, 4, 5, 5, 6];
const sinDuplicados1 = removerDuplicados(originalArray1);
console.log("El array original es: ", originalArray1, " y el nuevo sin los duplicados: ", sinDuplicados1);
console.log("----------");

console.log("Solución 2");
const originalArray2 = ["hola", "hola", "como", "como", "va", "va"];
const sinDuplicados2 = removerDuplicados(originalArray2);
console.log("El array original es: ", originalArray2, " y el nuevo sin los duplicados: ", sinDuplicados2);
console.log("----------");

console.log("Solución 3");
const originalArray3 = ["tengo", 2, 2, "manzanas", "manzanas"];
const sinDuplicados3 = removerDuplicados(originalArray3);
console.log("El array original es: ", originalArray3, " y el nuevo sin los duplicados: ", sinDuplicados3);
console.log("----------");

console.log("//////////");

/* 6. Convertir la primera letra de cada palabra en mayúscula */
/* Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayus */

function letraMayus(oracion) {
    return oracion
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log("Ejercicio 6: Convertir la primera letra de cada palabra en mayúscula");
console.log("//////////");

console.log("Solución 1");
console.log("vamos a ver cómo se comporta con esta frase");
const text = "vamos a ver cómo se comporta con esta frase";
const textMayus = letraMayus(text);
console.log("Texto modificado: ", textMayus);
console.log("----------");

console.log("Solución 2");
console.log("y con esta otra");
const text2 = "y con esta otra";
const textMayus2 = letraMayus(text2);
console.log("Texto modificado: ", textMayus2);
console.log("----------");

console.log("Solución 3");
console.log("y finalmente con esta");
const text3 = "y finalmente con esta";
const textMayus3 = letraMayus(text3);
console.log("Texto modificado: ", textMayus3);
console.log("----------");

console.log("//////////");


/* 7. Generar los primeros N números de la sucesión de Fibonacci */
/* Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de fibonacci*/

function generarFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

console.log("Ejercicio 7: Generar los primeros n números de la sucesión de fibonacci");
console.log("//////////");

console.log("Solución 1");
console.log(generarFibonacci(10));
console.log("----------");

console.log("Solución 2");
console.log(generarFibonacci(5));
console.log("----------");

console.log("Solución 3");
console.log(generarFibonacci(15));
console.log("----------");

console.log("//////////");
console.log("FIN");

