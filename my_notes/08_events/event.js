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
  console.log('Precio = ', event.target.dataset.price);
  console.log(event.target); // Lo que se clickeo
  console.log(event.currentTarget); // Es lo que disparo el event listener (se suele usar este)
  console.log(event.target === event.currentTarget); // Son el mismo elemento salvo en el boton 1 que tiene una etiqueta <strong> en el "1!"
  event.stopPropagation(); // Solo ve el callback de esta funcion y no el event listener de la window (evita la propagacion)
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    // Al clickear en un boton (que tambien es parte de la window) vamos a estar clickeando 2 elementos al mismo tiempo (PROPAGATION)
    console.log('Clickeaste la ventana');
    console.log(event.target);
    // event.stopPropagation(); Si se pone el stopPropagation aca, nunca va a ir al handler del boton
  },
  { capture: true } // Se triggerean los eventos de arriba para abajo (Document -> <html> -> <body> .... -> button), pero el bubbling o propagation es en sentido inverso
);

const photoElement = document.querySelector('.photo');
photoElement.addEventListener('mouseenter', function (e) {
  console.count(e.currentTarget);
  console.log(this); // Reserve Word 'this' para referirse al elemento sobre el cual se ejecuta la callback function (photoElement, lo que esta la izq de addEventListener)
});

// Otros eventos:
// 'keyup', 'keydown', 'focus', 'blur'
