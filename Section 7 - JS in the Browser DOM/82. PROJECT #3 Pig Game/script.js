'use strict';

// Selecting elements

// Step 1 -> 1.1. - в названия добавляем El, так как мы сохраняем в переменные DOM-элемент. Те ноды DOM, которые мы будем часто импользовать для манипуляции сохраняем в переменные в начале файла, чтобы потом их было легко переиспользовать.
const score0El = document.querySelector('#score--0');
// альтернативный варинат выбора элемента по ID, тут мы # не используем, getElementById работает немного быстрее чем queryselector
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice')



// Starting conditions

// 1.1 - вставляем в DOM елементы стартовые значения, пишем их числом, так как JS сконвертирует их в текст
score0El.textContent  = 0;
score1El.textContent  = 0;

// Step 2
diceEl.classList.add('hide');
