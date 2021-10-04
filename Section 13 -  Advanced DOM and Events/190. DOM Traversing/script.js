'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')


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


// 185 - Button scrolling

btnScrollTo.addEventListener('click', function () {

  const s1coords = section1.getBoundingClientRect()

  section1.scrollIntoView({ behavior: 'smooth' })

})



/////////////////////////////////////////////////////
// 189
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {

//     // сейчас при клике по лмнку мы переходим на анкор - нужную секцию, предотвратим это поведение
//     e.preventDefault()

//     // получаем href из линка по которому кликунули
//     const id = this.getAttribute('href')

//     console.log(id);  // #section--2 - получаем селектор до которого мы можем проскролить

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })

//   })

// })


document.querySelector('.nav__links').addEventListener('click', function (e) {

  e.preventDefault()

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {

    const id = e.target.getAttribute('href')

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }

})











































// Reference lectures & Experiments

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




// 186
// const h1 = document.querySelector('h1')

// const alertH1 = function (e) {
//   alert('Great! You are reading the heading!')
// }

// h1.addEventListener('mouseenter', alertH1)

// setTimeout(function () {
//   h1.removeEventListener('mouseenter', alertH1)
//   // console.log('3sec');
// }, 3000)



// 188
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()

  // e.currentTarget - элемент к которому приатаччен ивентХендлер
  // e.target - элемент где происходит событие

  // console.log('Link', e.target, e.currentTarget);

  // e.stopPropagation()
})


// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   console.log('Container', e.target, e.currentTarget);
// })


// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   console.log('Nav', e.target, e.currentTarget);
// })




// Step 1 - h1 'When banking meets minimalist"
const h1 = document.querySelector('h1')

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white'