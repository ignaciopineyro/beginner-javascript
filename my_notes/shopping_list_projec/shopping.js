const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

const items = [];

function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    };
    console.log(name);
}

shoppingForm.addEventListener('submit', handleSubmit);
