const p = document.querySelector('p'); // Selecciona los paragraphs del documento
const divs = document.querySelector('div'); // Selecciona las secciones con estilos de CSS del documento
const imgs = document.querySelectorAll('.item img'); // Selecciona todas las imagenes de la class items
const item = document.querySelector('.item2'); // Selecciona primero el class item 2
const itemImage = item.querySelector('img'); // Del item 2, selecciona la imagen solamente
const elementById = document.getElementById('SubDiv_id'); // Selecciona un elemento por id

const heading = document.querySelector('h2');
console.log(heading.textContent); // Getter
heading.textContent = 'Header cambiado'; // Setter
console.log(heading.textContent); // Getter
// heading.innerHTML no contiene las etiquetas HTML del header
// heading.outerHTML contiene las etiquetas <h2></h2>

const firstDiv = document.querySelector('h1');
firstDiv.insertAdjacentText('beforeend', '♥'); // Agrega texto adyacente antes del final
firstDiv.insertAdjacentText('afterbegin', '☺'); // Agrega texto adyacente al comienzo

const pic = document.querySelector('.nice');
console.log(pic.classList); // Array de clases en la imagen que contiene la clase 'nice'
pic.classList.add('open'); // Agrega una clase llamada 'open'
pic.classList.remove('open'); // Elimina la clase llamada 'open'
pic.classList.toggle('round'); // Agrega/Elimina (toggle) la class round que tiene asociado un style de CSS

pic.alt = 'Fotito';
pic.width = 100; // Accedo al atributo width y lo seteo (setter)
const picAlt = pic.getAttribute('alt');
pic.setAttribute('width', 50); // Tambien puedo setear el attr de esta manera
