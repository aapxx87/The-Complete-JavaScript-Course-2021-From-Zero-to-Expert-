
// в данном объекте у нас есть метод book

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {

    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })

  }
}

// lufthansa.book(239, 'Ivan Ivanov')
// lufthansa.book(625, 'John Smith')
// console.log(lufthansa.bookings);



const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
}
// мы хотим в данном объекте тоже использовать метод book из объекта lufthansa
// для этого сохраним метод book из объекта lufthansa в переменную как функцию (по сути этот метод и есть функция)
// то есть мы берем function value и сохраняем его в переменную
// в даннмо случае мы создаем отдельную функцию, копию метода. То есть это уже перестает быть методом.
const book = lufthansa.book


// ------ Call method


// мы не можем просто так вызвать эту функцию, так как в ней присутствует this, что вне контекста объекта lufthansa вызовет ошибку, так как сейчас это отдельная функция и this будет указывать на undefined
// book(333, 'Petr Petrov')

// правильный подход используем метод .call - первым аргументом мы передаем то, что должно заменить keyword this, то есть имя нужного объекта
book.call(eurowings, 23, 'Sara Williams')
console.log(eurowings);


book.call(lufthansa, 239, 'Ivan Ivanov')


const swiss = {
  airline: 'Swiss',
  iataCode: 'SW',
  bookings: []
}



lufthansa.book.call(swiss, 111, 'Igor')
console.log(swiss);





// ------ Apply method - принимает не аргументы а массив в отличие от метода call

const flightData = [583, 'Olga Ivanova']

lufthansa.book.apply(swiss, flightData)

console.log(swiss);

// мы можем деструктурировать массив в метод call
lufthansa.book.call(swiss, ...flightData)

console.log(swiss);
