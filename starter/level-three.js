// variables
let score = 0;
let scoreDisplay = document.querySelector('.js-score');
let levelWinner = document.querySelector('.level-winner');
let balls = document.querySelectorAll('.js-ball');

// event
for (let i = 0; i < balls.length; i++) {
    balls[i].addEventListener('click', () => {
        score += parseInt(balls[i].getAttribute('data-increment'))
        scoreDisplay.innerText = score;
        if (score >= 100) {
            levelWinner.style.opacity = 1;
        }
    });
}
