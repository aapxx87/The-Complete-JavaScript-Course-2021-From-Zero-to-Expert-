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


// Step 1
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')


btnScrollTo.addEventListener('click', function (e) {

  // задаем координаты элементы до которого хотим проскролить
  const s1coords = section1.getBoundingClientRect()
  console.log(s1coords);

  // получим координаты текущего элемента - то есть самой кнопки
  // console.log(e.target.getBoundingClientRect());

  // мы можем получать текущие координаты viewport
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // мы можем получить размеры прямоугольника текущего viewport
  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // Но нам нужны координаты секции до которой нужно проскролить - указываем координаты left и top
  // Scrolling
  // но в текущем виде рассчет идет строго от верха экрана, а не от текущего viewport, то есть если мы сместим экран, то будет смотрется кривовато
  // window.scrollTo(s1coords.left, s1coords.top)

  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)


  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  // более простой вариант
  section1.scrollIntoView({ behavior: 'smooth' })







})


































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




// 184
// Styles
// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// так мы можем получить только стили, которые пределили в ручную
// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// получитьь стили мы можем при помощи
// console.log(getComputedStyle(message)); // получим огромный объект со списком стилей

// // правильнее указать какой именно стиль нам нужен 
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// пример изменния стиля
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'

// пример работы с переменными (которые лежат в css в root)
// document.documentElement.style.setProperty('--color-primary', 'orangered')


// Attributes
const logo = document.querySelector('.nav__logo')
// console.log(logo.src);
// console.log(logo.id);
// console.log(logo.className);

// Set attributes
logo.alt = 'bla bla bla'

// Add attributes
logo.setAttribute('company', 'Bankist')

// Non-standart
// console.log(logo.designer);  // не работает
// console.log(logo.getAttribute('designer'));  // рабтает

// Data attributes - атрибуты, которые начинаются с data
// console.log(logo.dataset.versionNumber);


// Classes
// logo.classList.add('c', 'j')
// logo.classList.remove('c', 'j')
// logo.classList.toggle('c')
// logo.classList.contains('c')



