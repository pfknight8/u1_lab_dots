/*
 * DOTS: Level Two
 *
 */
let score = 0;
const ballsArr = document.querySelectorAll('.js-ball');
let scoreDisplay = document.querySelector('.js-score');
let levelWinner = document.querySelector('.level-winner');

const scoreUp = () => {
  score += 10;
  scoreDisplay.innerHTML = score;
  if (parseInt(scoreDisplay.innerHTML) >= 100) {
    levelWinner.style.opacity = 1;
  }
}

for (let i = 0; i < ballsArr.length; i++) {
  ballsArr[i].addEventListener('click', scoreUp);
}