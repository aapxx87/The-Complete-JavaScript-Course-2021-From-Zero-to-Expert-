'use strict';

// 74
let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

// Step 2
function addContent(place, string) {
  return document.querySelector(place).textContent = string;
}


// 74
let score = 20;


// 77
let highscore = 0;

// 73
document.querySelector('.check').addEventListener('click', function() {


  // const secretNumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(secretNumber);

  // 73
  const guess = Number(document.querySelector('.guess').value);

  // 73
  // When there is no input
  if (!guess) {

    addContent('.message', 'No number!')
    // document.querySelector('.message').textContent = 'No number!'

    // 74

    // When players win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';


    addContent('.number', secretNumber)
    // document.querySelector('.number').textContent = secretNumber;

    // 75
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // 77
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }


    // When giess is wrong
    // Step 1
  } else if (guess !== secretNumber) {

    if (score > 1) {
      document.querySelector('.message').textContent =  guess > secretNumber ? 'Too high!' : 'Too low!';
      // 74
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

  }

  // 78 - закоментировали код ниже

  // else if (guess > secretNumber) {
  //
  //   // 74
  //   // when guess is too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     // 74
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //
  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //
  //   // 74
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     // 74
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //
  // }



})


// 76
document.querySelector('.again').addEventListener('click', function() {

  score = 20;

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = "?";

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  console.log(secretNumber);

})























// d
