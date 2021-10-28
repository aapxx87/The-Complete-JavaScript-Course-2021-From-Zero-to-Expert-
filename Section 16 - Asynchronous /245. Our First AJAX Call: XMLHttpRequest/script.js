'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Step 2 - запакауем запрос в функцию, чтобы можно было совершать много запросов
const getCountrydata = function (country) {

  // Step 1 - создаем AJAX call, самый олдскульный вариант формирования запроса
  // сохраняем call в переменную
  // по сути мы создали запрос
  const request = new XMLHttpRequest()

  // вызываем у объекта запроса метод open
  // в методе open мы сначала указываем тип запроса (для получени яданных - это GET), а затем строку с url, куда будем стучаться
  request.open('GET', `https://restcountries.com/v2/name/${country}`)

  // посылаем запрос на url указанный выше - который получается в фоновом режиме
  request.send()


  // когда мы получили данные, addEventListener - load - ждем пока загрузится, то есть получим, выполнится колбек
  request.addEventListener('load', function () {

    // выводим свойство responseText из полученного объекта
    const [data] = JSON.parse(this.responseText)
    console.log(data);

    const html = `
  <article class="country">
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

  })

}


getCountrydata('usa')
getCountrydata('russia')






