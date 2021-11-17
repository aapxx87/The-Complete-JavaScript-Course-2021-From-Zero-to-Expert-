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

}







// Step 4 - рендеринг ошибки в интерфейс
const renderError = function (msg) {

  countriesContainer.insertAdjacentText('beforeend', msg)

}



// 249
const getCountryData = function (country) {

  // Country 1

  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      return response.json()
    }
      // Step 2 - добавим второй колбек в метод then, который будет отвечать за обработку ошибок. Первый коллбек отвечает за успешную обработку запросов. Но ошибка может прилететь ив следующем запросе - Step 3
      // , function (err) {
      //   return alert(err)
      // }
    ).then(function (data) {
      renderCountry(data[0])
      // console.log(data);

      const neighbour = data[0].borders[0]

      if (!neighbour) return

      // Country 2

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)


    }).then(function (response) {

      return response.json()

    }
      // Step 3 - добавляем обработку ошибок и во второй fetch call, но в итге получаем слишком много доп кода
      // , function (err) {
      //   return alert(err)
      // }
    ).then(function (data) {

      renderCountry(data, 'neighbour')

    })
    // Step 4 - мы можем обрабатывать ошибки сразу все в конце цепи запросов
    .catch(function (err) {
      // Step 5 - добавим рендеринг ошибки в интерфейс
      renderError(`Something went wrong - ${err.message}`)

      // return alert(err)

    })
    // Step 6 - данный метод выполнится и в случае успеха и ошибки
    .finally(function () {
      // используем данный метод когда нам нужно событие чтобы произошло независимо от результата, метод работает с промисами, то есть предыдущий метод должен выдавать результатом промис
      // как пример скрытие круга индикации загрузки
      // этот функционал показывает индикатор загрузки пока данные грузятся и скрывает его когда они загружены или нет, то еспешно или нет
      // в нашем кейсе мы меняем прозрачность контейнера в любом случае: хоть успешно и показываем данные по странам, хоть не успешно и показываем контейнер с сообщением ошибки

      countriesContainer.style.opacity = '1'


    })


}



// Step 1 - для симуляции ошибки используем отключение сети через хром и вкладку Network, то есть реализуем вызов функции fetch по клику на кнопку. Сначала загружается она, а потмо типа сеть отваливается
btn.addEventListener('click', function () {
  getCountryData('portugal')
})



// Step 6 - просимулируем другую ошибку, когда страна в запросе не существует в API
getCountryData('portugaldddd')







