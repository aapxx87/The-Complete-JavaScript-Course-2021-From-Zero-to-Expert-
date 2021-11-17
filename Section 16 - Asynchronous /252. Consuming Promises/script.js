'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// ----- AJAX call: XMLHttpRequest

// 247
const renderCountry = function (data, className = '') {

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `

  countriesContainer.insertAdjacentHTML('beforeend', html)

  countriesContainer.style.opacity = '1'

}

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




// 248
// пример с XMLhttpRequest
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.com/v2/name/${country}`)
//   request.send()

// Fetch API 
const request = fetch('https://restcountries.com/v2/name/portugal')


// Step 1 - создаем функцию для получения данных по АПИ и передаем в нее в качестве аргумента название страны
const getCountryData = function (country) {

  // промис может быть в двух состояних fullfieled - то есть успешный и rejected то есть вернет ошибку, сейчас мы обрабатываем состояние успеха, то есть fullfieled
  // изначально fetch вернет promise, и мы сразу вызывем у него метод then() 
  // в then мы засовывем callback, который вызовется если promise успешно реализуется (fullfilled), то есть результат будет доступен
  // в качестве аргмента callback  в методе then получает результат успешного вызова
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      // в самом респонсе есть body и сами данные находятся в нем
      // чтобы получить читабельный результат из body в response нужно вызвать JSON метод
      // json - это метод который доступен у всех респонсов, которые возвращает fetch
      // json метод вернет тоже promise
      return response.json()
      // так как метод json вернет promise, то нам нужно второй раз вызвать метод then
    }).then(function (data) {
      console.log(data);
      // рендерим в интерфейс страну
      renderCountry(data[0])
    })

}


// Step 2 - оптимизируем написание запроса выше в стрелочную функцию
const getCountryData2 = function (country) {

  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]))

}

// вызываем функцию с fetch
getCountryData('portugal')







