const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order: function (starterIndex, mainIndex) {
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





//  -------- OR --------- - возвращает первое true значение или последнее false если все false
// в вопросе практического применения, OR мы часто используем для установки дефолтных значений 
console.log('-------- OR ---------');

// Any data type, return any data type, short-circuiting
// мы использовали два значения, которые не boolean и получили результат не логический

// short-circuiting means that first value is truthy value and it will immediately return that first value 
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);

// udefined is falsy value and null alse - return the last false value if all is falsy
console.log(undefined || null);


// 'Hello' - первое truly value, поэтому выдаст его
// мы начинаем с первого: undefined - falsy, 0 - falsy, '' - falsy, 'Hello' - truly -> первое истинное значение, поэтому его и вернет
console.log(undefined || 0 || '' || 'Hello' || 23 || 0);

// OR operation the result is true если как минимум из операндов true, как только появляется первый опранд true, оы дальше уже не смотрит, ибо результат выражения будет уже true  в любом случае


// more practical application of this
// допустим у нас есть свойство в объекте ресторана с количеством гостей, но мы не знаем точносуществует оно или нет
// мы изначально определим эту переменную и установим дефолтное значение, если там будет пусто

// логикаЖ если restaurant.numGuests - существует, то есть true, то вренуть restaurant.numGuests, если нет, то вернуть дефолтное значение 10


restaurant.numGuests = 23

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1);

// если метод существует, то вернет первое true, то есть то сколько метод выдаст значение, если не существ
console.log(restaurant.numGuests || 10);








//  -------- AND --------- - возвращает первое false значение или последнее true, если все true
// в вопросе практического применения, AND мы часто используем для выполнения кода (функции) в качестве последующего операнда, если они все true, то последний выполнится
console.log('-------- AND ---------');

// возвращает первый falsy oparator и останавливается после этого
console.log(0 && 'Jonas');

// если оба true, то возвращает последнее true
console.log(7 && 'Jonas');

// возвращает первый falsy oparator и останавливается после этого
console.log('Hello' && 23 && null && 'Jonas');


// пример
// если метод существует, то вызываем его
if (restaurant.orderPizza) {
  restaurant.orderPizza('котлета', 'огурцы')

}

// при помощи оператора && можно потсупить проще
// мы не згамем точно, существует ли такой метод, поэтому для начала проверяем это
// первое проверяем существует или нет, если не существует, то сразу первое будет false и все закончится
// но если он существует, то выполнится вторая часть функции, что сильно проще чем с if
restaurant.orderPizza && restaurant.orderPizza('котлета', 'огурцы')