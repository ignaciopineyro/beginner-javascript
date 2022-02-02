function wait(ms =0) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
	popup.classList.remove('open');
	await wait(1000);
	popup.remove();
}

function ask(options) {
  return new Promise(async function(resolve) {
		const popup = document.createElement('form');
		popup.classList.add('popup');
		popup.insertAdjacentHTML(
			'afterbegin', 
			`<fieldset>
				<label>${options.label}</label>
				<input type="text" name="input"/>
				<button type="submit">Submit</button>
			</fieldset>
		`
		);
			
		if(options.cancel) {
			const skipButton = document.createElement('button');
			skipButton.type = 'button';
			skipButton.text = 'Cancel';
			popup.firstElementChild.appendChild(skipButton);
		}

		popup.addEventListener('submit', function(e) {
			e.preventDefault();
			resolve(e.target.input.value);
			destroyPopup(popup);
		}, { once: true} // Es un tercer argumento que le dice que solo escuche al evento 1 sola vez
		);

		document.body.appendChild(popup);
				
		await wait(50);
		popup.classList.add('open')
	})
}

async function askQuestion(e) {
	const button = e.currentTarget;
	const answer = await ask({ title: button.dataset.question, cancel: true });
	console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));