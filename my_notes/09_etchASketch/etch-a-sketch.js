// Sleccionar los elementos de la pagina (canvas, shake button)
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // El context es donde realmente se dibuja
const shakebutton = document.querySelector('.shake');

// Configurar el canvas para dibujar
const { width, height } = canvas; // Es lo mismo que width = canvas.width. Cuando se asigna una propiedad a una variable del mismo nombre, se puede usar la desestructuracion
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round'; // Para que se vea un poco mas prolijo el context
ctx.lineCap = 'round'; // El puntito inicial es un circulo
ctx.lineWidth = 10;

let hue = 50;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // Donde comienza el dibujo
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

const MOVE_AMOUNT = 10;

// Escribir una funcion para dibujar
function draw({ key }) {
  // En lugar de pasar muchos argumentos, se pasa un objeto que adentro tiene los argumentos
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Escribir un handler para las teclas
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    draw({ key: e.key }); // Llama a la funcion draw con el argumento key: e.key (que es la flecha en cuestion)
    console.log('HANDLING ARROW KEY');
  }
}

// Escribir funcion para el boton shake
function clearCanvas() {
  canvas.classList.add('shake'); // Llama al CSS class Shake que hace vibrar el canvas
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake');
      console.log('Shakeado!');
    },
    { once: true }
  );
}

// Escuchar el tipeo de teclas
window.addEventListener('keydown', handleKey);

// Escuchar el boton shake
shakebutton.addEventListener('click', clearCanvas);
