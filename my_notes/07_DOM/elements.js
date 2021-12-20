const myParagraph = document.createElement('p'); // Crea el elemento en memoria (no en la pagina)
myParagraph.textContent = 'Soy un paragraph';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'Nice pic';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph); // Metodo que añade un nodo al final de la lista de un nodo padre espcificado
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';
myDiv.appendChild(heading);
myDiv.insertAdjacentElement('afterbegin', heading);

// Lista de numeros
const list = document.createElement('ul');

const li3 = document.createElement('li');
li3.textContent = 'tree';
list.appendChild(li3);
document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'five';
list.append(li5); // Append hace algo muy similar a appendChild

const li1 = li5.cloneNode(true); // Hace un duplicado del nodo li5
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);
