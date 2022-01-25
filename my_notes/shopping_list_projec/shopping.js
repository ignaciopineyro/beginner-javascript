const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = []; // State

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return; // Para que no agregue items cuando el input esta vacio
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item); // Pusheo items al state
  console.log(`Hay ${items.length} en el state`);
  e.target.reset(); // Limpio la barra de input
  list.dispatchEvent(new CustomEvent('itemsUpdated')); // Despacho un nuevo evento que luego sera escuchado
}

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
	<input value="${item.id}" type="checkbox" ${item.complete ? 'checked' : ''}>
	<span class="itemName">${item.name}</span>
	<button aria-label="Remove ${item.name}"
	value="${item.id}">&times;</button>
	</li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items)); // Con setItem metemos cosas en el LocalStorage. Hay que meter strings. Para transformar el objeto en string usamos JSON.stringify
}

function restoreFromLocalStorage() {
  const lsItems = JSON.parse(localStorage.getItem('items')); // Con getItems sacamos cosas del LocalStorage. Como solo saca strings, lo parseamos a JSON para que nos devuelva el objeto original
  if (lsItems.length) {
    items.push(...lsItems); // Como push toma infinitos argumentos, en cada iteracion toma el siguiente item
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('DELETING ITEM', id);
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('Marking as complete', id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems); // Escucha el evento 'itemsUpdated' cuando se despacha y llama a la callback
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});
restoreFromLocalStorage();
