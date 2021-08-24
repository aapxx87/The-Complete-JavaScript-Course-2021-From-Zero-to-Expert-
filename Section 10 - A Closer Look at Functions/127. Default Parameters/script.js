

// Booking function

const bookings = []

const createBooking = function (flightNum, numPassengers = 1, price = 200 * numPassengers) {
  // прелесть дефолтных значений еще и в том, что они могут содержать любые expression
  // но кроме того, мы можем опредеелять expression  в том числе и при помощи переменных, определенных раннее --> price = 199 * numPassengers <-- 

  // пример установления дефолтных параметров старым способом - ES5
  // numPassengers = numPassengers || 1
  // price = price || 199

  // при помощи аргументов создадим объект, который затем будем пушить в массив
  const booking = {
    // мы определеяем свойства объекта, которые будут равны строго названиям аргументов, поэтому используем упрощенную модель написания иначе было бы --> flightNum: flightNum, <--
    flightNum,
    numPassengers,
    price
  }

  console.log(booking);

  bookings.push(booking)
}


createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', 2)
createBooking('LH123', 5)



// пример если нужно пропустить дефолтный параметр
createBooking('LH123', undefined, 1000)
