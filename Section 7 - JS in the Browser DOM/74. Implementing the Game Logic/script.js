'use strict';

// Step 1 - определяем секретное число, нам нужно случайное число между 1 и 20
// Math - это объект JS у которого много различных методов, random генерирует случайное число между 0 и 1
// если мы хотим число между 1 и 20, то нужно умножить на 20, чтобы убрать десятичную часть мы используем Math.trunc(), но теперь у нас генерируется чило от 1 до 19, прибавляем 1
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// 1.1 - пока временно выведем на экран сгенерированное данное число
document.querySelector('.number').textContent = secretNumber;

// Step 3 -> 3.1
let score = 20;

// 73
document.querySelector('.check').addEventListener('click', function() {

  // 73
  const guess = Number(document.querySelector('.guess').value);

  // 73
  if(!guess) {
    document.querySelector('.message').textContent = 'No number!'

  // Step 2
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
  } else if (guess > secretNumber) {

    // Step 4 -> 4.1
    if(score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      // 3.1 -> 3.1.1
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

  } else if (guess < secretNumber) {

    // Step 4 -> 4.1
    if(score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      // 3.1 -> 3.1.1
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // document.querySelector('.message').textContent = 'Too low!';
    // // 3.1.1
    // score = score - 1;
    // document.querySelector('.score').textContent = score;
    // этот кусок перенесли в if выше

  }

})
