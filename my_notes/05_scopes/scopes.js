/* eslint-disable */

// Global Scope (no se suele usar)

const globalName = 'Nacho'; // Variable global, accesible desde cualquier lado (incluso desde el .html)
let globalNick = 'Nachin'; // Es una variable global, pero no esta asociada a window (al igual que 'const')
var globalAge = 100; // Las variables 'var' estan asociadas al objeto window (window.globalAge funciona)

function sayHi() { // La funcion es global y esta asociada a window (window.sayHi())
    const saludo = 'HOLA!';
    console.log('Hola, soy global!');
}

console.log(saludo); // Esto falla, porque la variable 'saludo' esta en el scope del block saiHi 

const dog = 'Carlitos';

function logDog() {
    console.log(dog);
}

function lexicalDog() { // Esta funcion va a usar 'Carlitos', porque es el valor de la variable dog donde esta definida logDog, no le importa el valor de dog en donde corre, si no donde esta definida
    const dog = 'Patita';
    logDog()
}

lexicalDog();