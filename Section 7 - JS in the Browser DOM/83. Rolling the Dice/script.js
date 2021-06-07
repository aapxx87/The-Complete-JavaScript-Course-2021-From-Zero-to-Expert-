'use strict';

// Selecting elements

// 82
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

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

// 2.1 - Создаем переменную для сохранения текущего счета (он получается из кладывания всех значений бросков кроме 1, если один то текущий скор обнуляется)
let currentScore = 0;


// Rolling dice functionality
// Step 2 -> 2.1
btnRoll.addEventListener('click', function() {
  // 1. Generating a random dice roll - данную перемнную мы генерируем внутри фукнции, а не снаружи, так как больше она нигде не нужна
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice - выше мы назначили ему класс hiden, чтобы скрыть при стартовых условиях, сейчас м ыудаляем этот класс
  diceEl.classList.remove('hide');
  // вставляем изображение нужного кол-ва кубика путем изменения src в элементе diceEl
   diceEl.src = `dice-${dice}.png`


  // 3. Check for rolled 1: if true, switch to next player
  if(dice !== 1) {
    // Add dice to the current score
    currentScore = currentScore + dice;
    current0El.textContent = currentScore;

  } else {
    // switch to next player

  }


})
