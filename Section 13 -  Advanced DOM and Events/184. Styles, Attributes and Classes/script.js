'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const openModal = function (e) {

  // Step 1 - добавляем e  в функцию
  e.preventDefault()

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(function (item) {
  item.addEventListener('click', openModal)
})



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});






// Reference lectures

// 183

// S* electing elements

// чтобы выделить весь документ для того, чтобы к примеру применить стили нужно обращаться на просто к document. а к его documentElement
// console.log(document.documentElement);

// console.log(document.head);

// console.log(document.body);

const allSections = document.querySelectorAll('.section')

// console.log(allSections);

document.getElementById('section--1')

// получаем все элементу по тегу - к примеру все кнопки со страницы
const allButtons = document.getElementsByTagName('button')
// этот метод возвращает HTMLCollection (life) - это озанчает что если ДОМ меняется то эта коллекция меняется автоматически. С NodeList такого не происходит
// console.log(allButtons);

document.getElementsByClassName('btn')
// так же вернет HTMLCollection - life


// * Creating and inserting elements

const header = document.querySelector('.header')

// .insertAdjacentHTML - в банкист его реализовывали


// создаем элемент - указываем какой тип элемента создаем
// метод возвращает элемент DOM, который нужно сохранить в переменную
// пока его нет нигде в доме, чтобы элемент появился в доме нам нужно мануально вставить его на страницу
const message = document.createElement('div')

// добавим класс элементу
message.classList.add('cookie-message')

// добавим текст в элемент - один вариант
// message.textContent = 'We used cookied for analytics'

// добавим текст в элемент - второй вариант
message.innerHTML = 'We used cookied for analytics. <button class="btn btn--close-cookie">Got it!</button>'

// теперь нам нужно вставить новый элемент в хедер (выше создали элемент header)
// метод prepend вставляет элемент как first child
// header.prepend(message)

// если хотим вставить как last child то используем метод append
header.append(message)

// в даннмо случае в ДОМ будет только одна нодаё

// допустим мы хотим вставить элемент в множественных местах
// header.append(message.cloneNode(true))

// header.before(message)
// header.after(message)



// * Delete elements
// удаляем элемент по клмику кнопки got it элемент message
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  // message.remove()

  // так это выглядит под капотом
  message.parentElement.removeChild(message)
})




// Step 1



