const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// Console Methods
console.log();
console.info();
console.error();
console.warn();
console.table(people); // Tira una tabla
console.count(); // Cuenta la cantidad de veces que se ejecuto ese console.count() especificamente
console.group(); // Agrupa todas las salidas de consola hasta groupEnd en un menu colapsable
console.groupEnd();

// Callstack / Stacktrace

// Grabbing Elements
/* Cuando se inspeccionan elementos de la web desde las dev tool, se pueden llamar a los elementos con $0, $1, $2... siendo 0
el ultimo elemento clickeado, 1 el segundo, etc. Se pueden hacer cosas como $0.value por ejemplo */

// Breakpoints
debugger; // Habilita el debugger para la dev tools

// Scope

// Network Requests
/* Network Tab en las dev tools muesta todas las requests que aparecen cuando se realizan acciones en la pagina */

// Break On Attribute
/* click derecho en un atributo de un elemento (tab Element de la dev tools) > break on > poner un breakpoint en la modificacion
del atributo, por ejemplo. De esa manera no hay que buscar en todo el proyecto donde esta ese elemento */

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', (e) => {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
