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
      console.log(`You are in ${data.country}, ${data.city}`);

      console.log(data);

      getCountryData(data.country)

      // renderCountry(data.country)

    }).catch(function (err) {

      alert(err.message)

    })

}


// getCountry(52.508, 13.381)



// Step 1
console.log('Test start');

setTimeout(function () {
  console.log('o sec timer');
}, 0)

Promise.resolve('Resolved promise 1').then(function (response) {
  console.log(response);
})

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i <= 1000000000; i++) { }
  console.log(res);
})

console.log('Test end');







