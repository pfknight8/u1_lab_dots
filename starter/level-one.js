// variables
let score = 0;
let scoreDisplay = document.querySelector('.js-score');
let levelWinner = document.querySelector('.level-winner');
const ball = document.querySelector('.js-ball');

// events
ball.addEventListener('click', () => {
    score += 10;
    scoreDisplay.innerText = score;
    if (score >= 100) {
        levelWinner.style.opacity = 1;
    }
})

