'use strict';


// 1
document.querySelector('.check').addEventListener('click', function() {

  // сохраняем введенное значение в input в переменную
  // все значения из инпутов, введенные пользователями прилетают нам как string, поэтому конвертируем сразу в Number
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // при подготовке приложений, в который пользователь что-то вводит, сразу добавляем проверку на то есть ли value в input или нет
  if(!guess) {
    document.querySelector('.message').textContent = 'No number!'
  }

})
