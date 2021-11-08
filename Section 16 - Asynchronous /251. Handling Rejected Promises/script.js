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

  // countriesContainer.style.opacity = '1'

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

// Fetch API - сохраняем в переменную
// в Fetch мы можем определить много еще параметров (объект с опциями), но пок ограничимся одним
// в даннмо случае Fetch вернет Promise, который и сохранит в переменную
const request = fetch('https://restcountries.com/v2/name/portugal')

// console.log(request);

// Step 4 - рендеринг ошибки в интерфейс
const renderError = function (msg) {

  countriesContainer.insertAdjacentText('beforeend', msg)

  // countriesContainer.style.opacity = '1'

}

// 249
const getCountryData = function (country) {

  // Country 1

  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      return response.json()
    }
      // Step 2 - добавим второй колбек в метод then, который будет отвечать за обработку ошибок. Первый коллбек отвечает за успешную обработку запросов.
      // , function (err) {
      //   return alert(err)
      // }
    ).then(function (data) {
      renderCountry(data[0])
      console.log(data);

      // Step 1 - выполняем второй запрос 
      const neighbour = data[0].borders[0]

      if (!neighbour) return

      // Country 2

      // второй ajax call
      // он вернет еще один promise
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)

      // и нам данный promise нужно опять обработать методом then

    }).then(function (response) {

      return response.json()
      // получаем опять Promise

    }
      // Step 3 - добавляем обработку ошибок и во второй fetch call
      // , function (err) {
      //   return alert(err)
      // }
    ).then(function (data) {

      renderCountry(data, 'neighbour')
      // рендерим данные в интерфейс

    })
    // Step 3 - мы можем обрабатывать ошибки сразу все в конце цепи запросов
    .catch(function (err) {
      // Step 4 - добавим рендеринг ошибки в интерфейс
      renderError(`Something went wrong - ${err.message}`)
      console.error(err);
    })
    // Step 5 - данный метод выполнится и в случае успеха и ошибки
    .finally(function () {
      // используем данный метод когда нам нужно событие чтобы произошло независимо от результата, метод работает с промисами, то есть предыдущий метод должен выдавать результатом промис
      // как пример скрытие круга индикации загрузки
      // этот функционал показывает индикатор загрузки пока данные грузятся и скрывает его когда они загружены или нет, то еспешно или нет
      // в нашем кейсе мы меняем прозрачность контейнера в любом случае: хоть успешно и показываем данные по странам, хоть не успешно и показываем контейнер с сообщением ошибки

      countriesContainer.style.opacity = '1'


    })


}


// 250
// const getCountryData = function (country) {

//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0]))

// }

// вызываем функцию с fetch
// getCountryData('portugal')


// Step 1
btn.addEventListener('click', function () {
  getCountryData('portugal')
})



// Step 6 - просимулируем другую ошибку, когда страна в запросе не существует в API
getCountryData('portugaldddd')







