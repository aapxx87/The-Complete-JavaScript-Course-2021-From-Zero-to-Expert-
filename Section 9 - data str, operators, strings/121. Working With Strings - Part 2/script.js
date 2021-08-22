const airline = 'TAP Air Portugal'
const plane = 'A320'


// приведение всех символов к нижнему регистру
console.log(airline.toLowerCase());


// приведение всех символов к верхнему регистру
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());


// Fix capitalization in name
const passenger = 'jOnAs'  // it shouls looks like 'Jonas'

// first step - we put all to lower case
const passengerLower = passenger.toLowerCase()

// первый вариант
const passengerCorrect = passengerLower.slice(0, 1).toUpperCase() + passengerLower.slice(1)

// вторйо вариант
const passengerCorrect2 = passengerLower[0].toUpperCase() + passengerLower.slice(1)

console.log(passengerCorrect2);  // Jonas



// ------ Another real life example - comparing emails

// пример зарегленного емейла
const email = 'hello@jonas.io'

// пример неправильно введенного емейла
const loginEmail = '   Hello@Jonas.Io \n'

// первый шаг в сравнении - приведедние к lowerCase
const lowerEmail = loginEmail.toLowerCase()

// дальше нужно удалить все пробелы и энтер - для этого есть специальный метод .trim()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail);

// альтернативный вариант
const normalizedEmail = loginEmail.toLowerCase().trim()

console.log(normalizedEmail);
console.log(email === normalizedEmail);


// ------ Replacing
const priceGB = '288,97P'  // типа фунтов, хз где значек фунтов

// нам нужно теперь запятую поменять на точку, а P на значек доллара
// используем метод replace() с двумя аргументами - первый что меняем, второй на что меняем
// можно делать замену двумя переменными, а можно chaining
const priceUS = priceGB.replace('P', '$').replace(',', '.')
console.log(priceUS);


// ------ мы можем заменять целые слова
// нужно door заменить на gate
const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replaceAll('door', 'gate'));

// альтернативный вариант - regular expression (g means - global)
console.log(announcement.replace(/door/g, 'gate'));


// ----- Booleans
const plane2 = 'Airbus A320neo'

// содержит ли строка определенный фрагмент
console.log(plane2.includes('A320'));  // true


// начинается ли строка с определенного фрагмента
console.log(plane.startsWith('A320'));  // true


// несколько условий к строке
if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Yes');
}

// -------- Practice exercise - типа проверяем багаж на безопасность
const checkBaggage = function (items) {

  // первым делом мы приводим строку к нижнему регистру, так сильно проще потом ее сравнивать
  const baggage = items.toLowerCase()

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome on board');
  }

}

checkBaggage('I have a laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and gun for protection')

