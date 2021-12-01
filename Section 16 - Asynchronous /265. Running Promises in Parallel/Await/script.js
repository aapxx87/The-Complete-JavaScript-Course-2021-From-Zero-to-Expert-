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


// 255
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


      // 255
      if (!response.ok) {

        throw new Error(`Country not found ${response.status}`)
      }


      return response.json()
    })
    .then(function (data) {

      renderCountry(data[0])

      const neighbour = data[0].borders[0]

      if (!neighbour) {
        throw new Error('No neighbour found')
      }
      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)

    })
    .then(function (response) {

      // 255
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`)
      }

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



// 255
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


// getCountryData('portugal')




// Challenge 1

// 256
const getCountry = function (lat, lng) {
  // console.log();

  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(function (response) {
      // console.log(response);

      if (!response.ok) {
        throw new Error(`Больше 1 запроса в секунду. Не спешите ${response.status}`)
      }
      return response.json()
    }).then(function (data) {
      // console.log(`You are in ${data.country}, ${data.city}`);

      // console.log(data);

      getCountryData(data.country)

      // renderCountry(data.country)

    }).catch(function (err) {

      alert(err.message)

    })

}


// getCountry(52.508, 13.381)



// 258
// console.log('Test start');

// setTimeout(function () {
//   console.log('o sec timer');
// }, 0)

// Promise.resolve('Resolved promise 1').then(function (response) {
//   console.log(response);
// })

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i <= 1000000000; i++) { }
//   console.log(res);
// })

// console.log('Test end');



// 259
// const lotteryPromise = new Promise(function (resolve, reject) {
//   // console.log('Lottery draw is happening');

//   setTimeout(function () {

//     if (Math.random() >= 0.5) {
//       resolve('You WIN!')
//     } else {
//       reject(new Error('You LOSE!'))
//     }

//   }, 2000)

// })

// 259
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))


// 259
const wait = function (seconds) {

  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000)
  })

}

// 259
wait(2)
  .then(() => {
    // console.log('I waited for 1 seconds');
    return wait(1)
  })
  .then(() => {
    // console.log('I waited for 2 seconds');
    return wait(1)
  })
  .then(() => {
    // console.log('I waited for 3 seconds');
  })




// 260
// navigator.geolocation.getCurrentPosition(
//   function (position) {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);

//     getCountry(position.coords.latitude, position.coords.longitude)
//   },
//   function (err) {
//     console.error(err);
//   }
// )







// 262
const whereAmI = async function (country) {

  const res = await fetch(`https://restcountries.com/v2/name/${country}`)

  const data = await res.json()

  // console.log(data);

}


// whereAmI('russia')



// 263
// Theory - для отлова ошибок в конструкциях async await мы не можем использовать метод catch, так как его некуда присоединить. В данном случае мы используем конструкцию try catch

// мы оборачиваем код для исполнения в конструкцию try, JS попробует исполнить этот код как обычный нормальный код
// после него мы добавляем catch, который будет иметь доступ ко всем ошибкам, которые могут возникнуть в блоке try
// try {

//   // пример с отловом ошибки
//   const x = 2
//   const y = 3
//   x = y

// } catch (err) {
//   console.log(err.message);
// }


// My Example 1
const getStockQuotes = async function (stock) {

  try {

    const stockPrice = await fetch(`https://api.tdameritrade.com/v1/marketdata/${stock}/quotes?apikey=I6POQMG2MLCUUT26XJCSHZAEX4HF4AZG`)

    const stockPriceData = await stockPrice.json()
    const ticker = stock.toUpperCase()
    const lastStockPrice = stockPriceData[ticker].lastPrice

    return lastStockPrice

  } catch (err) {
    console.log(err.message);
  }



}


const multiply = function (number) {
  return number * 100
}

// getStockQuotes('aapl')

// My Example 2
const getRubQuotes = async function () {

  try {

    const rubPrice = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const rubData = await rubPrice.json()
    const rubUsdRate = rubData.Valute.USD.Value

    // console.log(rubUsdRate);

    return rubData.Valute.USD.Value

  } catch (err) {
    console.log(err.message);
  }



}





// getRubQuotes()




// S264

console.log();







const calcStockPriceRub = async function () {

  try {

    // step 1 - в даннмо случае все исинхронные запросы идут друго за другом, но не параллеьно, что замедляет процесс
    // const rubRate = await getRubQuotes()

    // const stockQuote = await getStockQuotes('aapl')

    // const stockQuote2 = await getStockQuotes('nvda')

    // const stockQuote3 = await getStockQuotes('rblx')

    // Step 2 - паралелим процесс запросов
    // метод all принимает массив промисов и в конце возвращает массив из промисов с велью
    // сразу деструктурируем результирующий массив по переменным
    const [rubRate, stockQuote, stockQuote2, stockQuote3] = await Promise.all([
      getRubQuotes(),
      getStockQuotes('aapl'),
      getStockQuotes('nvda'),
      getStockQuotes('rblx')
    ])


    console.log(rubRate, stockQuote, stockQuote2, stockQuote3);

    const rubPrice = (rubRate * stockQuote).toFixed(2)
    const rubPrice2 = (rubRate * stockQuote2).toFixed(2)
    const rubPrice3 = (rubRate * stockQuote3).toFixed(2)

    console.log(rubPrice, rubPrice2, rubPrice3);


  } catch (err) {

    console.error(err.message)

  }


}

calcStockPriceRub()




// 264
// (async function () {

//   try {

//     const rubRate = await getRubQuotes()

//     const stockQuote = await getStockQuotes('aapl')

//     const rubPrice = rubRate * stockQuote

//     console.log(rubPrice);


//   } catch (err) {

//     console.error(err.message)

//   }


// })()





