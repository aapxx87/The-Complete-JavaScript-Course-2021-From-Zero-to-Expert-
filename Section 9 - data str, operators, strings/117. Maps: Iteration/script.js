
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    mon: {
      open: 12,
      close: 22,
    },
    tue: {
      // open: 12,
      close: 22,
    },
    wed: {
      // open: 12,
      close: 22,
    },
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
    sun: {
      open: 11,
      close: 23,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  // новый синтаксис из es6 по добавлению методов - не нужно писать слово function
  order2(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} and ${time}`);

  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  // создадим новый метод - первый ингридиент обязательный, аостальные опциональные
  orderPizza: function (mainIngridient, ...otherIngridients) {

    console.log(mainIngridient);
    console.log(otherIngridients);

  }
};

const openingHours = {
  mon: {
    open: 12,
    close: 22,
  },
  tue: {
    // open: 12,
    close: 22,
  },
  wed: {
    // open: 12,
    close: 22,
  },
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
  sun: {
    open: 11,
    close: 23,
  },
}




// вставим в мэп массив, который будет включать в себя другие массивы на примере теста, то есть один элемент массива содержит другие массивы с частями опросника
const question = new Map([
  // сам вопрос
  ['question', 'What is the best programming language in th eworld?'],
  // варианты ответов
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  // прописываем правильный ответ
  ['correct', 3],
  // добаляем сообщение если Правильно
  [true, 'Correct'],
  // добавляем сообщение если Не правильно
  [false, 'Try again'],

])

console.log(question);


// ---- Convert Object to map - возьмем объект выше - restaurant
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap);


// ----- Iteration
// можем сразу деструктурировать item
// мы хотим выести только варианты ответов, то есть вывести тольео те элементы где key - это number
for (const [key, value] of question) {

  if (typeof key === 'number') {
    console.log([key, value]);
    // console.log(`Answer ${key}: ${value}`);
  }
}

// log
// (2) [1, "C"]
// (2) [2, "Java"]
// (2) [3, "JavaScript"]

// получим ответ от юзера через prompt
// const answer = Number(prompt('Your answer'))


// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// альтернативный вариант - резульат true или false сразу вставляем в метод get
// question.get(answer === question.get('correct'))
// console.log(question.get(answer === question.get('correct')));



// ---- конвертация мэпа в массив - стспользуем для этого spread
console.log([...question]);

// достанем только key из мэпа в массив
console.log([...question.keys()]); // ["question", 1, 2, 3, "correct", true, false]

// достанем только value из мэпа в массив
console.log([...question.values()]); // ["What is the best programming language in th eworld?", "C", "Java", "JavaScript", 3, "Correct", "Try again"]