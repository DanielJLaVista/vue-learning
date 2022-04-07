//Define the desired end result and the data we need, leave the rest up to Vue
Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');
//Imperative approach. Define each step, step by step, to execute the desired behaviour

// const buttonElement = document.querySelector('button');
// const inputElement = document.querySelector('input');
// const listElement = document.querySelector('ul');

// function addGoal() {
//     const inputValue = inputElement.value;
//     const listItemElement = document.createElement('li');
//     listItemElement.textContent = inputValue;
//     if (inputValue != '') {
//         listElement.appendChild(listItemElement);
//     }
//     inputElement.value = '';
// }

// buttonElement.addEventListener('click', addGoal);