'use strict';

// Selecting elements

// 82
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

// Step 5 - создаем переменные элементов в HTML - 5.1
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice')

// Step 1
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')



// Starting conditions

// 82
score0El.textContent  = 0;
score1El.textContent  = 0;
diceEl.classList.add('hide');

// 83
let currentScore = 0;

// Step 1 - игрок 1 унас идет под номером 0, а игрок 2 у нас идет под номером 1
let activePlayer = 0;

// Step 2 - итоговый скор игрока 1 будет на 0 позиции, а второго игрока на позиции 1 в массиве
const scores = [0, 0];


// Rolling dice functionality
// 83
btnRoll.addEventListener('click', function() {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  diceEl.classList.remove('hide');
  // 83
   diceEl.src = `dice-${dice}.png`


  // 3. Check for rolled 1: if true, switch to next player
  if(dice !== 1) {
    // Add dice to the current score
    currentScore = currentScore + dice;

    // Step 3
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    // current0El.textContent = currentScore;

  } else {

    // switch to next player

    // 4.1 - делаем переменную текущего счета равной 0 - 4.2
    currentScore = 0;

   // 4.2 - вставляем в HTML значение текущего счет 0, до того как поменяем активного игрока
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    // Step 4 - 4.1
    activePlayer = activePlayer === 0 ? 1 :0;

    // 5.1 - используем метод toggle
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');





  }


})




























// d
