'use strict';

const maxScore = 20;
let secretNumber;
let score;
let highscore = 0;

const init = function () {
  score = maxScore;
  secretNumber = Math.trunc(Math.random() * maxScore) + 1;  
};

init();

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

const displayHiddenNumber = function (hidden) {
  document.querySelector('.question').textContent = hidden;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayWidthOpenNumber = function (width) {
  document.querySelector('.question').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  // No input
  if (!guessingNumber) {
    displayGuessMessage('Введите число!');

    // Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно!');
    displayHiddenNumber(secretNumber);
    displayBackgroundColor('rgb(9, 250, 21)');
    displayWidthOpenNumber('50rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      displayScore(score);
    } else {
      displayGuessMessage('Game Over!');
      displayScore('0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  init();

  displayHiddenNumber('???');
  displayWidthOpenNumber('25rem');
  displayBackgroundColor('rgb(0, 0, 0)');
  displayGuessMessage('Начни угадывать!');
  displayScore(score);
  document.querySelector('.number-input').value = '';
});
