/* eslint-disable */

// STRINGS
const firstName = 'Ignacio';
const sentence1 = 'She\'s so "cool"';
const sentence2 = `She's "cool" and I use backticks`;

const badFormat = "hello my name is " + firstName + ". Nice to meet you.";
const goodFormat = `hello my name is ${firstName}. Nice to meet you, I'm ${15+10} years old.`;

// NUMBERS
const age = 100;
const hours = 20.45; // ints y floats son numbers sin distincion entre ellos
const rounder = Math.round(20.5);
const random = Math.random();
const inf = 1000 ** 200; // si el numero es demasiado grande devuelve infinity
const nan = 10/'dog'; // devuelve NaN

// OBJECTS
const person = {
    first: 'Ignacio',
    last: 'Pin',
    age: 20
};
console.log(typeof person);
console.log(person.first);

// NULL AND UNDEFINED
let dog; // si solo se declara pero no se define tiene que usarse let
console.log(dog); // devuelve undefined aunque dog este declarada
console.log(person.dog); // devuelve undefined
const somethingNull = null; // para que sea null tiene que estar definido como tal

// BOOLEANS
let isDrawing = false;
const year = 1800;
const ofYear = year > 1900; // devuelve false
console.log(ofYear);
const year2 = '1800';
console.log(year === year2) // devuelve false, porque el triple = compara valor y type. El valor es igual (1800), pero uno es number y el otro string.
console.log(year == year2) // devuelve true porque el doble = compara solo valor (1800)