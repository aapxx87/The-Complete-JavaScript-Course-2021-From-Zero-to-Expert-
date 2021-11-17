'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Step 1
// Создаем отдельную функцию для рендеринга данных в интерфейсе
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

// 245
const getCountryAndNeighbour = function (country) {

  // AJAX call country 1
  const request = new XMLHttpRequest()

  request.open('GET', `https://restcountries.com/v2/name/${country}`)

  request.send()

  request.addEventListener('load', function () {

    const [data] = JSON.parse(this.responseText)
    console.log(data);

    // 1.1 - вызываем фукнцию рендеринга данных в интерфейс
    // Render country 1
    renderCountry(data)

    // Step 2
    // Get neighbour country
    // так как borders - это массив с объектом, сразу деструктурируем его, но в данном случае заберем только первый элемент, который актуален для кейса с Португалией 
    const [neighbour] = data.borders
    console.log(neighbour);

    // если границ нет совсем (чекаем), то сразу возвращаемся
    if (!neighbour) return

    // но если границы есть, то есть neighbour существует, то осуществляем следующий вызов

    // AJAX call country 2
    const request2 = new XMLHttpRequest()

    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)

    request2.send()

    request2.addEventListener('load', function () {

      const data2 = JSON.parse(this.responseText)
      console.log(data2);

      renderCountry(data2, 'neighbour')

    })




  })

}


getCountryAndNeighbour('portugal')
// getCountrydata('russia')






