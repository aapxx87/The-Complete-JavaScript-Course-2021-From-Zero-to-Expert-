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

    // 230
    const coords = [latitude, longitude]

    // 230
    const map = L.map('map').setView(coords, 13);

    console.log(map);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coords).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();


    // Step 1 - добавляем обратботчик событий на карту, чтобы определять координаты отмеченной нами кнопки на карте
    // map - это объект сгенерированный Leaflet, у него много разных методов
    map.on('click', function (mapEvent) {
      console.log(mapEvent);

    })


  }, function () {
    alert('Could not get your position')
  })

}
