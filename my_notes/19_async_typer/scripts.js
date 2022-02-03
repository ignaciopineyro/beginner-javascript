function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
	return Math.floor(randomNumber * (max -  min) + min);
}

// Usando async for of loop
async function draw(el) {
	const text = el.textContent;
	let soFar = '';
	for(const letter of text) {
		console.log(letter);
		soFar += letter;
		el.textContent = soFar;
		const amountOfTimeToWait = getRandomBetween();
		await wait(amountOfTimeToWait);
	}
}

// Usando recursion
function draw2(el) {
	let index = 1;
	const text = el.textContent;
	const { typeMin, typeMax } = el.dataset;
	async function drawLetter() {
		el.textContent = text.slice(0, index);
		index += 1;
		const amountOfTimeToWait = getRandomBetween();
		await wait(amountOfTimeToWait);
		if (index <= text.length){
			drawLetter();
		}
	}
	drawLetter();
}


document.querySelectorAll('[data-type]').forEach(draw);
document.querySelectorAll('[data-type]').forEach(draw2);