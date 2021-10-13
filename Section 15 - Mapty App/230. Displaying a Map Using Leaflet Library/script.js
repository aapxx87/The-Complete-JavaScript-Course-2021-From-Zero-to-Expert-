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


// 229
if (navigator.geolocation) {

  navigator.geolocation.getCurrentPosition(function (position) {

    const { latitude } = position.coords
    const { longitude } = position.coords

    console.log(`https://www.google.fr/maps/@${latitude},${longitude}`);

    // координаты в setView([51.505, -0.09] передаются в виде массива, поэтому создаем массив с нашими координатами
    const coords = [latitude, longitude]

    // Step 2 - после получения координат имплементируем код leaflet
    // в L.map('map') вставляет div, в котормо будет отображаться карта
    const map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coords).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

  }, function () {
    alert('Could not get your position')
  })

}
