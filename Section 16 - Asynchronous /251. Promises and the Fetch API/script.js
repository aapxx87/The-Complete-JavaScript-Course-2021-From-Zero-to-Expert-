'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// ----- AJAX call: XMLHttpRequest

// 247
// const renderCountry = function (data, className = '') {

//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `

//   countriesContainer.insertAdjacentHTML('beforeend', html)

//   countriesContainer.style.opacity = '1'

// }

// // 245
// const getCountryAndNeighbour = function (country) {

//   // AJAX call country 1
//   const request = new XMLHttpRequest()

//   request.open('GET', `https://restcountries.com/v2/name/${country}`)

//   request.send()

//   request.addEventListener('load', function () {

//     const [data] = JSON.parse(this.responseText)
//     console.log(data);

//     // 247
//     renderCountry(data)

//     // 247
//     const [neighbour] = data.borders
//     console.log(neighbour);

//     if (!neighbour) return

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest()

//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)

//     request2.send()

//     request2.addEventListener('load', function () {

//       const data2 = JSON.parse(this.responseText)
//       console.log(data2);

//       renderCountry(data2, 'neighbour')

//     })

//   })

// }


// getCountryAndNeighbour('portugal')




// Step 1 - переписываем олд скульный XMLHttpRequest на Fetch API

// пример с XMLhttpRequest
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.com/v2/name/${country}`)
//   request.send()


// Fetch API - сохраняем в переменную
// в Fetch мы можем определить много еще параметров (объект с опциями), но пока ограничимся одним
// в даннмо случае Fetch вернет Promise, который и сохранит в переменную
// Promise (обещание) - это заполнитель для будущего результата асинхронного результата или это как контейнер для результата (значения), которое доставит асинхронный запрос или еще проще - это контейнер для будущего значения
const request = fetch('https://restcountries.com/v2/name/portugal')

console.log(request);








