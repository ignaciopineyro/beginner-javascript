function wait(ms =0) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function ask(options) {
    return new Promise(async function(resolve) {
			const popup = document.createElement('form');
			popup.classList.add('popup');
			popup.instertAdjacentHTML('afterbegin', `
					<fieldset>
							<label>${options.label}</label>
					</fieldset>
			`);
			
			if(options.cancel) {
					const skipButton = document.createElement('button');
					skipButton.type = 'button';
					skipButton.text = 'Cancel';
			}

			document.body.appendChild(popup);
					
			await wait(50);
			popup.classList.add('open')
    })
}
