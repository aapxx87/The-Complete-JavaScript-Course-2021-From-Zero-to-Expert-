'use strict';

// 79
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

// 79
for(let i = 0; i < btnsOpenModal.length; i++) {

  // Step 1
  btnsOpenModal[i].addEventListener('click', function() {


    console.log('Button clicked');

   // Step 2
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');


  });
}


// Step 4 -> 4.1
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}


// Step 3 -> 3.1
// Step 4 - по клику вызываем сразу вновь созданную фукнцию, при этом мы не вызываем сразу созданную функцию closeModal() - не пишем (), ибо если мы так напишем, то есть сразу вызовем ее, а не по клику

btnCloseModal.addEventListener('click', closeModal);


// Step 4
overlay.addEventListener('click', closeModal)

// 3.1 - более ранняя версия
// overlay.addEventListener('click', function() {
//   // modal.classList.add('hidden');
//   // overlay.classList.add('hidden');
//
//   // 4.1
//   // closeModal()
// })





















// d
