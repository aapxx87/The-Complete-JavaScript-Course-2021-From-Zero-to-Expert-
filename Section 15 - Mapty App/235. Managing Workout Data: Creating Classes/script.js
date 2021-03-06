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

// 232
// let map, mapEvent


// Step 1
class Workout {

  date = new Date()
  // в идеале мы используем различные библиотеки для того, чтобы генерить Id, но сейчас возьмем для id текузую дату6 конвертнем ее в строку и заберем последние 10 знаков
  id = (Date.now() + '').slice(-10)

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km 
    this.duration = duration; // in min
  }
}

// Step 2
class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.calcPace()
  }

  // создаем метод для рассчета Темпа для данного вида тренировок
  calcPace() {
    // min/km
    // создаем новое свойство 
    this.pace = this.duration / this.distance;
    return this.pace
  }
}

// Step 2.1
class Cycling extends Workout {
  constructor(coords, distance, duration, elevetionGain) {
    super(coords, distance, duration);
    this.elevetionGain = elevetionGain;
    this.calcSpeed()
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60)
    return this.speed
  }

}

const run1 = new Running([39, -12], 5.2, 24, 178)
const cycle1 = new Cycling([39, -12], 27, 95, 523)

console.log(run1, cycle1);










///////////////////////////
// APPLICATION ARCHITECTURE
// 234
class App {

  #map;
  #mapEvent;

  constructor() {

    this._getPosition()

    form.addEventListener('submit', this._newWorkout.bind(this))

    // 232
    inputType.addEventListener('change', this._toggleElevationField.bind(this))

  }

  // метод получения текущей позиции
  _getPosition() {

    // 229
    if (navigator.geolocation) {

      // вынесли код функционала загрузки карты в отдельный метод и вставляем его сюда как колл бек - this._loadMap
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
        function () {
          alert('Could not get your position')
        })
    }

  }

  // метод загрузки карты
  _loadMap(position) {

    const { latitude } = position.coords
    const { longitude } = position.coords

    console.log(`https://www.google.fr/maps/@${latitude},${longitude}`);

    // 230
    const coords = [latitude, longitude]

    // 230
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    // 231
    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this))

  }

  // метод показа формы
  _showForm(mapE) {

    // 232
    this.#mapEvent = mapE

    // 232
    form.classList.remove('hidden')

    // фокусируем курсор сразу на инпуте Distance
    inputDistance.focus()

  }

  // метод переключения типа тренирровки
  _toggleElevationField() {

    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')

  }

  // метод создания новой тренировки
  _newWorkout(e) {

    e.preventDefault()

    // Clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = ''

    const { lat, lng } = this.#mapEvent.latlng

    L.marker([lat, lng]).addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup'
      }))
      .setPopupContent('Workout')
      .openPopup();

  }


}



// 234
const app = new App()











