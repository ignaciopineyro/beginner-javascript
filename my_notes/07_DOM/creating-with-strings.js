const item = document.querySelector('.item');
item.innerHTML = `
    <div>
      <h1>Header agregado desde JS!</h1>
    </div>
`;

const item2 = document.querySelector('.item2');
const src = 'https://source.unsplash.com/random/300x300';
const desc = 'Fotito desde js';
const myHTML = `
  <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}">
  </div>
`;

console.log(typeof myHTML); // Es un string, no un element
item2.innerHTML = myHTML;

// Pasar del string a elemento del DOM con "createContextualFragment"
const myFragment = document.createRange().createContextualFragment(myHTML); // Range es una coleccion de elementos del HTML
myFragment.querySelector('img'); // Los elementos que antes eran strings, ahora son elementos del DOM
document.body.append(myFragment);
