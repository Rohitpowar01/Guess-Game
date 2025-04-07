let random;
let max;

function startGame() {
    max = document.getElementById('maxNumber').value;
    random = Math.floor(Math.random() * max) + 1;
    document.getElementById('game').style.display = 'block';
    document.getElementById('message').innerText = '';
    document.body.classList.remove('win-animation');
    clearInterval(colorFlickerInterval);
    document.body.style.backgroundColor = '#f0f8ff';
}

function makeGuess() {
    const guess = parseInt(document.getElementById('guessNumber').value);
    if (isNaN(guess)) {
        document.getElementById('message').innerText = "Please enter a valid number";
        return;
    }
    if (guess === random) {
        document.getElementById('message').innerText = `You are right! Congrats! Random = ${random}`;
        startColorFlicker();
    } else if (guess < random) {
        document.getElementById('message').innerText = "Your number is too small! Try to guess again";
    } else {
        document.getElementById('message').innerText = "Your number is too large! Try to guess again";
    }
}

let colorFlickerInterval;

function startColorFlicker() {
    colorFlickerInterval = setInterval(() => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
    }, 200);
}