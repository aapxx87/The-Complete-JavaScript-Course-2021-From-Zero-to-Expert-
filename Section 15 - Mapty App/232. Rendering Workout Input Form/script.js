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

// Step 2.1
// для доступа в необходимым переменным  из form ивентХендлер создаем внешнюю переменную
let map, mapEvent



// 229
if (navigator.geolocation) {

  navigator.geolocation.getCurrentPosition(function (position) {

    const { latitude } = position.coords
    const { longitude } = position.coords

    console.log(`https://www.google.fr/maps/@${latitude},${longitude}`);

    // 230
    const coords = [latitude, longitude]

    // 230
    map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 231
    // Handling clicks on map
    map.on('click', function (mapE) {

      // Step 2.3
      // сохраняем собыите mapE в глобальную переменную, чтобы доступ к ней был и для других функций, в данном событии мы только отображаем форму при клике на карту, а запись самих координат и постановку маркера мы перенесли в событие подтсверждения формы. Поэтому тут объект mapE не нужен, но понадобится там. Поэтому и сохраняем его в mapEvent
      mapEvent = mapE

      // Step 1
      // изначально у нас при помощи css форма скрыта (стоит класс hidden) - убираем его
      form.classList.remove('hidden')

      // фокусируем курсор сразу на инпуте Distance
      inputDistance.focus()



      // const { lat, lng } = mapEvent.latlng

      // L.marker([lat, lng]).addTo(map)
      //   .bindPopup(L.popup({
      //     maxWidth: 250,
      //     minWidth: 100,
      //     autoClose: false,
      //     closeOnClick: false,
      //     className: 'running-popup'
      //   }))
      //   .setPopupContent('Workout')
      //   .openPopup();

    })


  }, function () {
    alert('Could not get your position')
  })

}


// Step 2
form.addEventListener('submit', function (e) {

  // страница автоматически перезагружается при подтверждении формы, предотвращаем это поведение
  e.preventDefault()


  // Clear input fields
  inputDistance.value = inputDuration.value = inputCadence.value = ''



  const { lat, lng } = mapEvent.latlng

  L.marker([lat, lng]).addTo(map)
    .bindPopup(L.popup({
      maxWidth: 250,
      minWidth: 100,
      autoClose: false,
      closeOnClick: false,
      className: 'running-popup'
    }))
    .setPopupContent('Workout')
    .openPopup();

})


// Step 3
// меняется выбор в поле Type (run, cicle) и при этом меняется класс скрытия полей Elevation / Cadence
inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})