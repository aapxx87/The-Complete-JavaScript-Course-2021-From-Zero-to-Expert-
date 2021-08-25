const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {

    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })

  }
}


const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}


const book = lufthansa.book


// book.call(eurowings, 23, 'Sara Williams')


// Bind method

// bind не вызывает функцию, вместо этого он создает новую функцию, он вставляет введенный аргумент вместо keyword this

const bookEW = book.bind(eurowings)

// теперь используем новую функцию bookEW
bookEW(333, 'Rosta Roatev')


// в методе book объекта lufthansa есть принимаемые аргументы - (flightNum, name) и мы можем в bind уже епердать один из них, типа чтобы потом вводить только второй аргумент, то есть в примере ниже flightNum уже будет прописан как 23 и потом вводить нужно будет только name

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Tolik')
console.log(eurowings);


// With event listeners

lufthansa.planes = 300

// создадим новый метод в объекте lufthansa

lufthansa.buyPlane = function () {

  console.log(this);

  this.planes++

  console.log(this.planes);

}


const buyPlaneFN = lufthansa.buyPlane.bind(lufthansa)


// нужно использовать bind, иначе this указывает на document.querySelector('.buy') а не на нужный объект, в bind мы заранее уазываем на какой объект указывать this
document.querySelector('.buy').addEventListener('click', buyPlaneFN)

// Partial Application - we can preset parameters

const addTax = function (rate, value) {
  return value + value * rate
}

// допустим мы используем в каждой стране одинковое значение rate
// если this не нужно, то мы вставляем в первый аргумент null
const addVAT = addTax.bind(null, 0.2)

console.log(addVAT(200));



console.log('--------- Challenge -------');




const addTaxChal = function (rate) {

  // console.log(value + value * rate);

  return function (value) {
    console.log(value + value * rate);
  }


}

addTaxChal(0.2)(200)