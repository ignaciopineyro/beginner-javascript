const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
function handleClick() {
  console.log('SE CLIKEO EL BOTON');
}
butts.addEventListener('click', handleClick); // handleClick esta bounded al elemento butts
coolButton.addEventListener('click', handleClick); // handleClick esta bounded al elemento coolButton

butts.removeEventListener('click', handleClick); // Unboundea handleClick al elemento butts

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('Comprando item...');
}

buyButtons.forEach((buyButton) => {
  // forEach loopea en cada uno de los botones evento. El parametro buyButton lo da el navegador y se puede llamar de cualquier forma
  buyButton.addEventListener('click', buyItem);
});

function handleBuyButtonClick(event) {
  // se puede agregar el parametro event (vale otro nombre) para tener info del evento
  console.log('Te lo estas llevando regalado!');
  console.log('Precio = ', event.target.dataset.price);
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});
