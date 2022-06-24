/*
 * DOTS: Level Three
 *
 */
let score = 0;
const ballsArr = document.querySelectorAll('.js-ball');
let scoreDisplay = document.querySelector('.js-score');
let levelWinner = document.querySelector('.level-winner');


for (let i = 0; i < ballsArr.length; i++) {
  ballsArr[i].addEventListener('click', () => {
    score += parseInt(ballsArr[i].getAttribute('data-increment'));
    scoreDisplay.innerText = score;
    if (score >= 100) {
      levelWinner.style.opacity = 1;
    }
  })
}