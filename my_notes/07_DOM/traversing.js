// Para navegar entre los elementos del DOM
const nacho = document.querySelector('.clasecita');
console.log(nacho.children);
console.log(nacho.childNodes);
console.log(nacho.lastElementChild);
console.log(nacho.previousElementSibling);
console.log(nacho.nextElementSibling);
console.log(nacho.parentElement);

const p = document.createElement('p');
p.textContent = 'Me voy borrado';
document.body.appendChild(p);
p.remove();
console.log(p); // El elemento sigue siendo accesible en memoria
