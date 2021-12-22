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
  <div>
    <p> Paragraph One </p>
    <p> Paragraph One </p>
  </div>
`;
const ulElement = div.querySelector('ul');
ulElement.insertAdjacentElement('beforebegin', myHTML);
