const airline = 'TAP Air Portugal'
const plane = 'A320'


// мы можем получить символ на определенной позиции
console.log(plane[0]);  // A

// можем сразу из строки получить нужный символ
console.log('B737'[0]);  // B

// узнать длинну строки
console.log(airline.length);  // 16

// узнать длинну строки прямо из строки
console.log('TAP Air Portugal'.length);  // 16





// ---- METHODS

// получаем позицию опеределенного символа
console.log(airline.indexOf('r'));  // 6


// получаем последнюю позицию опеределенного символа после всех его повторений
console.log(airline.lastIndexOf('r'));  // 10


// получаем индекс с которого начинается целое слово
console.log(airline.indexOf('Portugal'));