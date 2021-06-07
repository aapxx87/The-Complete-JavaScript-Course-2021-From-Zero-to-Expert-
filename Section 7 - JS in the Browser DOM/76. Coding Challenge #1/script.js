'use strict';

// 74
let secretNumber = Math.trunc(Math.random() * 20) + 1;


// 74
let score = 20;

// 73
document.querySelector('.check').addEventListener('click', function() {

  // const secretNumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(secretNumber);

  // 73
  const guess = Number(document.querySelector('.guess').value);

  // 73
  // When there is no input
  if(!guess) {
    document.querySelector('.message').textContent = 'No number!'

  // 74
  // When players win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';

    document.querySelector('.number').textContent = secretNumber;

    // 75
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';


  } else if (guess > secretNumber) {

    // 74
    // when guess is too high
    if(score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      // 74
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

  // when guess is too low
  } else if (guess < secretNumber) {

    // 74
    if(score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      // 74
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }



  }

})


// Step 1
document.querySelector('.again').addEventListener('click', function() {

  // восстанавливаем переменную score до начальных 20
  let score = 20;

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = "?";

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20) + 1;


})





















// d
