function calculateBill(billAmount, taxRate = 0.21) {
  console.log(`Calculating bill:`);
  const total = billAmount * (1 + taxRate);
  return total;
}

const myOrder = 45.6;
const herOrder = 68.1;

const myTotal = calculateBill(100, 21);
const myTotal2 = calculateBill(500, undefined);
const myTotal3 = calculateBill(myOrder + herOrder);
console.log(`Your total is $${myTotal}`);
console.log(`Your total 2 is $${myTotal2}`);
console.log(`Your total 3 is $${myTotal3}`);

// console.log(doctorize(`Nacho`)); // Funciona porque todas las funciones declaradas con function keyword son hoisted (js las tira para arriba de todo)
// console.log(doctorize2(`Nacho`)); // No funciona porque para js es una variable y no la hoistea

function doctorize(firstName) {
  // Regular function, con function keyword declaration
  return `Dr. ${firstName}`;
}

// function (firstName) {  // Anonimous Function (no tiene nombre). Asi suelta tira error, pero se usa en otros contextos
//   return `Dr. ${firstName}`;
// }

const doctorize2 = function (firstName) {
  // Function Expression. Toma una anon funct y la asigna a una variable (el navegador intepreta que ese es el nombre de la func). Funciona bien.
  return `Dr. ${firstName}`;
};

/* eslint-disable */
const inchToCM = (inches) => {
  // Fat arrow declaration. No usa la keyword function
  return inches * 2.54;
}

const inchToCM2 = (inches) => inches * 2.54; // Arrow function. Declaracion en una linea y con return implicito

const add = (a, b = 3) => a + b;

const makeABaby = (first, last) => ({name: `${first} ${last}`, age:0});

(function(age) { // IIFE: Immediately Invoked Function Expression. 
  console.log('Running the Anon function');
  return `You are cool and ${age} years old`;
})(25);

const Nacho = { // Methods. Funciones dentro de objetos
  name: 'Nach Hho',
  sayHi: function() { // Method
    console.log ('Hey Nacho!');
  },
  shortMethod(){ // Short hand method
    console.log(`SHORT METHOD INSIDE NACHO CLASS`)
  },
  arrowMethod: () => { // Arrow function
    console.log('Arrow Method!')
  }
}

function handleClick(){
  console.log('Clicked!')
}
const button = document.querySelector('.clickMe');
button.addEventListener('click', handleClick) // Callback function con la funct declarada antes
button.addEventListener('click', function(){ // Le paso una anon funct como value directamente
  console.log('Well done!')
});
