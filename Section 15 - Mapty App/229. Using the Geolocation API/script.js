'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


// Step 1.1 - на всякий случай проверяем существует ли в броузере возможность определения местоположения (если типа старые броузеры)
if (navigator.geolocation) {

  // Step 1 - функция getCurrentPosition() имеет два колбека: 1) возвращает текущее местоположение если все ок 2) возвращает ошибку, если что-то пошло не так. Определяем две эти фукнции коллбека
  navigator.geolocation.getCurrentPosition(function (position) {
    // данная функция вызывается с параметром, который называется Position Parameter - имя можем дать любое, дадим position
    // выведем гео данные в консоль
    // console.log(position);

    // position parameter - это объект из двух свойств - {coords: GeolocationCoordinates, timestamp: 1634099819836}
    //  мы можем получить доступ сразу к его с войству coords - position.coords - {latitude: 59.9324314, longitude: 30.3659958, altitude: null, accuracy: 15.499, altitudeAccuracy: null, …}

    // сохраним только широту и долготу
    // сразу деструктурируем из объекта position.coords только широту(latitude) и долготу(longitude)
    // const latitude = position.coords.latitude
    // const longitude = position.coords.longitude

    const { latitude } = position.coords
    const { longitude } = position.coords

    // console.log(latitude, longitude);

    // Step 2 - генерируем ссылку на гугл карты, вставляя в них наши координаты
    console.log(`https://www.google.fr/maps/@${latitude},${longitude}`);


  }, function () {
    alert('Could not get your position')
  })

}
