'use strict';

// Selecting elements

  // 82
  const score0El = document.querySelector('#score--0');
  const score1El = document.getElementById('score--1');

  // 84
  const player0El = document.querySelector('.player--0');
  const player1El = document.querySelector('.player--1');


  const current0El = document.getElementById('current--0');
  const current1El = document.getElementById('current--1');

  const diceEl = document.querySelector('.dice')

  // Step 1
  const btnNew = document.querySelector('.btn--new')
  const btnRoll = document.querySelector('.btn--roll')
  const btnHold = document.querySelector('.btn--hold')

//


// Starting conditions

  // 82
  score0El.textContent  = 0;
  score1El.textContent  = 0;
  diceEl.classList.add('hide');

  // 83
  let currentScore = 0;

  // 84
  let activePlayer = 0;

  // 84
  const scores = [0, 0];

  // Step 5 - 5.1
  let playing = true;

//


// Функция переключения активного игрока.

  // Step 2
  const switchPlayer = function() {

    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // тернарный оператор смены игрока
    activePlayer = activePlayer === 0 ? 1 :0;

    // меняем стиль css для части экрана активного игрока
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

  }

//


// Rolling dice functionality

  // 83
  btnRoll.addEventListener('click', function() {


    // Если let playing = true;

      // Step 6 - 6.1 так же заносим эту логику для кнопки btnHold
      if (playing) {

        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display the dice
          diceEl.classList.remove('hide');
          // 83
          diceEl.src = `dice-${dice}.png`
        //

        // 3. Check for rolled 1: if true, switch to next player
          if(dice !== 1) {

          // Add dice to the current score
            currentScore = currentScore + dice;
            // 83
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // current0El.textContent = currentScore;
          //

        } else {

          // switch to next player - можно вставить функцию switchPlayer
            // 84
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // тернарный оператор смены игрока
            activePlayer = activePlayer === 0 ? 1 :0;

            // меняем стиль css для части экрана активного игрока
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
          //

        }

    // Если let playing = false;
    } else {

    }

    //

  })

//



// Btn Hold functionality - hold current score to global score or switch player

  // Step 1
  btnHold.addEventListener('click', function() {

    // 6.1
    if (playing) {

      // 1. Add current score to active player's score
        scores[activePlayer] = scores[activePlayer] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
      //

      // 2. Check if player's score is >= 100

       // Step 4
       if (scores[activePlayer] >= 20) {

         // 5.1
         playing = false;

         // display dice
         diceEl.classList.add('hide');

         // Finish the Game
         // мы назначаем победившему игроку класс css победителя
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
         // удаляем у победившего игрока текущий класс активного игрока, иначе они применятся одноврменно (активный и победивший)
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

       } else {

         // Switch to the next player
         // Step 3
         switchPlayer();

       }

      //

    }

  })

//


























// d
