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
// const request = fetch('https://restcountries.com/v2/name/portugal')

// console.log(request);

// 251
const renderError = function (msg) {

  countriesContainer.insertAdjacentText('beforeend', msg)

  // countriesContainer.style.opacity = '1'

}


// Step 3 - запакуем часть fetch и обработку ошибок в функцию хелпер, которую будем использовать к цепи запросов
const getJSON = function (url, errorMsg = 'Something went wrong') {

  fetch(url).then(function (response) {

    if (!response.ok) {
      throw new Error(`Country not found ${response.status}`)
    }

    return response.json()
  })

}



// 249
// const getCountryData = function (country) {

//   // Country 1

//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {

//       console.log(response);

//       // Step 1 - в объекте response есть свойство ok (принимает true или false)
//       // если мы ввели неправильно имя страны, то ок будет false
//       // поэтому прописываем условие
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`)
//       }

//       return response.json()
//     }
//       // 251
//       // , function (err) {
//       //   return alert(err)
//       // }
//     ).then(function (data) {
//       renderCountry(data[0])
//       console.log(data);

//       // 250 
//       // const neighbour = data[0].borders[0]

//       // Step 2 - допустим ошибка вылетит не в первом запросе а во втором
//       const neighbour = 1


//       if (!neighbour) return

//       // Country 2

//       // второй ajax call
//       // он вернет еще один promise
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)

//       // и нам данный promise нужно опять обработать методом then

//     }).then(function (response) {


//       // Step 2.1 - обрабатываем ошибки второго запроса
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`)
//       }

//       return response.json()
//       // получаем опять Promise

//     }
//       // 251
//       // , function (err) {
//       //   return alert(err)
//       // }
//     ).then(function (data) {

//       renderCountry(data, 'neighbour')
//       // рендерим данные в интерфейс

//     })
//     // 251
//     .catch(function (err) {
//       // 251
//       renderError(`Something went wrong - ${err.message}`)
//       console.error(err);
//     })
//     // 251
//     .finally(function () {

//       countriesContainer.style.opacity = '1'

//     })


// }


// 250
// const getCountryData = function (country) {

//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0]))

// }


// Step 4
const getCountryData = function (country) {

  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`).then(function (data) {

    renderCountry(data[0])
    console.log(data);

    const neighbour = data[0].borders[0]

    if (!neighbour) return

    return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, `Country not found`)

  }).then(function (data) {
    renderCountry(data, 'neighbour')
  })
    .catch(function (err) {
      renderError(`Something went wrong - ${err.message}`)
      console.error(err);
    })
    .finally(function () {
      countriesContainer.style.opacity = '1'
    })

}



// Step 1
btn.addEventListener('click', function () {
  getCountryData('portugal')
})



// 251
getCountryData('portugal')







