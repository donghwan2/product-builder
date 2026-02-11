const generateBtn = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers-container');
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Theme switcher

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light');
    }
});

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeSwitch.checked = true;
    } else {
        body.classList.add('light-mode');
        themeSwitch.checked = false;
    }
}

// Lotto number generation

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers() {
    numbersContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const numberSet = document.createElement('div');
        numberSet.classList.add('number-set');
        const numbers = generateLottoNumbers();
        numbers.forEach(number => {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('circle-number');
            numberDiv.textContent = number;
            numberSet.appendChild(numberDiv);
        });
        numbersContainer.appendChild(numberSet);
    }
}

generateBtn.addEventListener('click', displayNumbers);

// Apply theme on load
applyTheme();
