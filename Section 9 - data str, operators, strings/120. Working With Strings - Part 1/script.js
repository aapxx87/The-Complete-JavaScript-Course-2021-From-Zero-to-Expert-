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


// slice - выбрать часть строки 
console.log(airline.slice(4)); // обрежет первые 4 символа строки - Air Portugal
// в данном случае аргумент 4 - это позиция с которой начинается извлечение - мы получаем substring, так ак это только часть основной строки



console.log(airline.slice(4, 7)); // извлечение с 4 по 7 символ - Air


// допустим нам нужно извлечь первое слово из строки, но мы не знаем его длинну. Тогда нам нужно вкачестве второго аргунемнта указать индекс первого пробела, который идет соответственно сразу за словом
console.log(airline.slice(0, airline.indexOf(' ')));  // Tap


// допустим нам нужно извлечь последнее слово, в этом случае мы стартуем с индекса последнего пробела + 1, иначе пробел будет включен в экстракт вместе с поаледним словом
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal



// мы можем опредлять в том числе и негативные аргументы
console.log(airline.slice(-2));  // al -> last two letters from Portugal


// можно определять одноврмеенно негативные и позитивные параметры
console.log(airline.slice(1, -1));  // AP Air Portuga



// пример - нужно определить средние места в самолете - извлекаем послений симвои и проверяем условием

const checkMiddleSeat = function (seat) {
  // B и Е средние места

  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    console.log('It is middle seat');
  } else {
    console.log('It isnt');
  }

}

checkMiddleSeat('11E')


// Строки это примитивный тип данных, так ак же мы можем вызывать методы у них? JS при вызове метода у строки преобразует его в объект, этот процесс называется boxing
console.log(new String('jonas'));

// log
// String {"jonas"}
// 0: "j"
// 1: "o"
// 2: "n"
// 3: "a"


console.log(typeof new String('jonas'));   // object
