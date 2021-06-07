'use strict';

// 79
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

// 79
for(let i = 0; i < btnsOpenModal.length; i++) {

  // 80
  btnsOpenModal[i].addEventListener('click', function() {

   // 80
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}


// 80
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}


// 80
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)


// Step 1 - мы слушаем события везде в данном случае, на всей странице. Мы вешаем прослушиватель событий на объект document
// Step 2 - передаем в функцию параметр для прослушивания событий - e (event), но в принципе можем записать это как угодно.
// Кога событие произойдет, JS вызовет функцию с объектом в виде аргумента
// мы тут не вызываем фукнцию, а только ее определяем
document.addEventListener('keydown', function(e) {

  // мы сможем увидеть сгенерированный объект при нажатии клавиши в консоли
  //  e - это сгенерированный объект, поэтому мы можем получить информацию о любом из его свойств.
  console.log(e.key);

  // Step 3 -> 3.1
  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {

    // 3.1 -> проверяем наличие нужного класса у объекта, в данном случае нас интеерсует если данный класс не активен, тое сть модалка показывается
    // if(!modal.classList.contains('hidden')) {
      // тут мы функцию сразу вызываем, так как она должна выполниться при нажатии кнопки
       closeModal()
    // }
  }
})






















// d
