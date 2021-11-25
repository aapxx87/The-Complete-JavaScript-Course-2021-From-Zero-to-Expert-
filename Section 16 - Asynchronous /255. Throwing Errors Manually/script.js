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




// 254
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
}


// Step 3 - назовем функцию хелпер getJSON так как она получает данные и немедленно конвертирует их в JSON 
// в качестве первого параметра мы прописываем url по которому будет стучаться fetch 
// в качестве второго параметра, чтобы не хардкодить текст ошибки мы передаем errorMessage и устанавливаем дефоолтное значнеие для нее
// вся эта функция вернет промис
// заменяем код внутри getCountryData на функцию хелпер - Step 4
const getJSON = function (url, errorMsg = 'Something went wrong') {

  return fetch(url).then(function (response) {

    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`)
    }

    return response.json()

  })

}





// 249
const getCountryData = function (country) {

  // Country 1

  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {

      // console.log(response);


      // Step 1 - промис сам по себе без обработки всегда будет settled, даже при наличии ошибок. Rejected, то есть отклонять мы его должны ручным способом, то есть дописать код для этого. Если мы ничего не ввели в поле страны в качестве аргумента, то нам в Response (см console.log(response)) вернет status: 404 (Not found - не найдено), а в свойстве ok будет false из-за 404 ошибки. Когда все ок, то статус 200 и в свойстве ок: true. Мы будем использовать в нашей обработке ошибки результат который выдает свойство OK. Создаем для этго new Error, которая будет отклонять rejected promise если свойство ок = false
      // прописыввем условие, что если свойство ok в объекте response = false (то есть в случае условной конструкции не существует, то есть не true)
      if (!response.ok) {

        // выбрасываем ошибку и вводим в качестве аргунемнта в новый инстанс ошибки сообщение. Ключевое слово throw немендленно прекращает выполнение функции если услолвная конструкция верна и промис немедленно отклоняется
        // если ошибка отлавливается то, весь дальнейший ход фукнции остаанливается и ошибка сразу прилетает в финальный catch
        throw new Error(`Country not found ${response.status}`)
      }
      // но ошибка может вылезти не в первом запросе а дальше, поэтому нам нужно отлавливать ошибки и там -> Step 2


      return response.json()
    })
    .then(function (data) {

      // console.log(data);

      renderCountry(data[0])

      const neighbour = data[0].borders[0]

      if (!neighbour) {
        throw new Error('No neighbour found')
      }
      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)

    })
    .then(function (response) {

      // Step 2
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`)
      }
      // но сейчас у нас получается что мы второй раз дублируем код с методом json и обработкой ошибки, что противоречит принципу DRY. То есть имеет смысл создать функцию хелпер с данным функционалом, которая будет отлавливать ошибки и конвертировать response в json
      // но мы можем запакаовать в функцию не только саму часть с then с работой с респонсом, но и первую часть с fetch -> Step 3

      return response.json()
    })
    .then(function (data) {
      renderCountry(data, 'neighbour')
    })
    // 254
    .catch(function (err) {
      renderError(`Something went wrong - ${err.message}`)
    })
    // 254
    .finally(function () {
      countriesContainer.style.opacity = '1'
    })

}



// Step 4 - выше закоментируем функцию, чтобы сохранилось как было до внедрения фукнции хелпера, а ниже перепишем все с функцией хелпером
// 249
// const getCountryData = function (country) {

//   // Country 1

//   // Step 4.1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(function (data) {

//       console.log(data);

//       renderCountry(data[0])

//       const neighbour = data[0].borders[0]

//       console.log(neighbour);

//       if (!neighbour) return

//       // Country 2
//       // Step 4.2
//       return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found')

//     })
//     .then(function (data) {
//       console.log(data[0]);
//       renderCountry(data[0], 'neighbour')
//     })
//     // 254
//     // .catch(function (err) {
//     //   renderError(`Something went wrong - ${err.message}`)
//     // })
//     // 254
//     .finally(function () {
//       countriesContainer.style.opacity = '1'
//     })

// }




// 254
btn.addEventListener('click', function () {
  getCountryData('portugal')
})


getCountryData('portugal')











