const generateBtn = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers-container');
const themeSwitch = document.getElementById('theme-switch');

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    for (const number of numbers) {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);
    }
});

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});