/*
 * DOTS: Level One
 *
 */
let score = 0;
const ballToTouch = document.querySelector('.js-ball');
let scoreDisplay = document.querySelector('.js-score');
let levelWinner = document.querySelector('.level-winner');

const scoreUp = () => {
  score += 10;
  scoreDisplay.innerHTML = score;
  if (parseInt(scoreDisplay.innerHTML) >= 100) {
    levelWinner.style.opacity = 1;
  }
}

ballToTouch.addEventListener('click', scoreUp);
