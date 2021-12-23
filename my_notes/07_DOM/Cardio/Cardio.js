const div = document.createElement('div'); // Make a div
div.classList.add('wrapper'); // Add a class of wrapper to it
document.body.appendChild(div); // Put it into the body

// Make an unordered list. Add three list items with the words "one, two, three" in them. Put that list into the above wrapper
const ul = ` 
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;
div.innerHTML = ul;

const img = document.createElement('img'); // Create an image
img.src = 'https://source.unsplash.com/random/300x300'; // Set the source to an image
img.width = 250; // Set the width to 250
img.classList.add('cute'); // Add a class of cute
img.alt = 'Cute Puppy!'; // Add an alt of Cute Puppy
div.appendChild(img); // Append that image to the wrapper

// With HTML string, make a div, with two paragraphs inside of it. Put this div before the unordered list from above
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning'); // Add a class to the second paragraph called warning
myDiv.children[0].classList.remove(); // Remove the first paragraph

// Create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class='playerCard'>
      <h2>${name} - ${age}</h2>
      <p> They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
    <button class='delete' type='button'>&times; Delete</button>
    </div>
  `;
  return html;
}
const cards = document.createElement('div');
cards.classList.add('cards'); // Make a new div with a class of cards
let cardsHTML = generatePlayerCard('Nacho', 25, 180); // Make 4 player cards using generatePlayerCard
cardsHTML += generatePlayerCard('Carlos', 60, 160);
cardsHTML += generatePlayerCard('Lidia', 20, 165);
cardsHTML += generatePlayerCard('Cintia', 40, 158);
cards.innerHTML = cardsHTML; // Append those cards to the div
div.insertAdjacentElement('beforebegin', cards); // Put the div into the DOM just before the wrapper element

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttons = document.querySelectorAll('.delete'); // Select all the buttons!
function deleteCard(event) {
  // Make out delete function
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove();
}
buttons.forEach((button) => button.addEventListener('click', deleteCard)); // Loop over them and attach a listener
