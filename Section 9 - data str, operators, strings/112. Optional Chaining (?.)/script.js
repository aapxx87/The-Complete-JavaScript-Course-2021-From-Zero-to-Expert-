


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

// допустим мы хотим вытащить время работы по monday из объекта openingHours, но он не существует. Теперь представим, что мы не знаем работает ли заведение в monday или нет?
// console.log(restaurant.openingHours.mon.open);  // mon не существует, поэтому получим error
// для того чтобы избежать ошибки, нам нужно сначала проверить сущестует ли такой key


// если restaurant.openingHours.mon - true, то есть существует, то выполнить то что в {}
// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// это пример с проверкой одного свойства, а если их больше то будет прямос овсме не удобно
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }


// Как это работает удобнее с optional chaining - перед неизвестным значением мы тсавим ?
// console.log(restaurant.openingHours.mon?.open);
// только если свойство перед ? существует то мы пойдем к следующему свойству






// ----- more real example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// теперь пройдемся по массиву, чтобы понять открыт или закрыт ресторан в определенные дни и затем выведем в консоль график работы в каждый из дней
for (const day of days) {
  // console.log(day);

  // если мы хотим передать в объект свойство не literal, то нужно использовать [], мы передаем в него дни недели из цикла
  // мы спрашиваем существует ли свойство open
  // допустим где-то нет open и нам выдает в этом случае undefined, нам этого не нужно и мы хотим устновить дефолтные значения для такого случая 
  // сипользуем оператор or, который возвращает первое true значение или последнее false если все false, то есть если restaurant.openingHours[day]?.open - не существует, то есть false, то мы вставим "closed"
  // но в один из дней у нас время работы идет с 0 часов, что воспринимается как false - и как следствие нам выдает, что в этот день заведедние закрыто, то не так - решение nullish coalescing operator ?? вместо or = ||
  const open = restaurant.openingHours[day]?.open ?? 'closed'



  // console.log(`On ${day}, we open at ${open}`);

}


// ---- methods - мы можем проверить существует ли метод, перед тем как его вызвать
console.log(restaurant.order?.(1, 0) ?? 'Method does not exist');


// ---- Arrays

const users = [
  { name: 'Jonas', email: 'hello@jonas.io' }
]
// только если users[0]? - существует, то выдать свойство name -  впротивном случае выдать сообщение
console.log(users[0]?.name ?? 'User array empty');

