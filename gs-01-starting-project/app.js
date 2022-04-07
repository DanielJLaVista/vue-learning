const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const listElement = document.querySelector('ul');

function addGoal() {
    const inputValue = inputElement.value;
    const listItemElement = document.createElement('li');
    listItemElement.textContent = inputValue;
    if (inputValue != '') {
        listElement.appendChild(listItemElement);
    }
    inputElement.value = '';
}

buttonElement.addEventListener('click', addGoal);