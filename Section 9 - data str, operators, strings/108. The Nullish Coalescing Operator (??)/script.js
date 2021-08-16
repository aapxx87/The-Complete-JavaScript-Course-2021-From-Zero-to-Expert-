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



restaurant.numGuests = ''

const guests = restaurant.numGuests || 10
// мы установили кол-во гостей 0, который JS считает за false, поэтому он выдаст нам дефолтное значение 10. Но 0 даннмо случае это не undefined, а именно ноль гостей, то есть это именно значение. То есть мы получаем не корректный ответ.

console.log(guests);  // 10

// более верный подход с оператором The Nullish Coalescing Operator 
// данный оператор работает с концепцией nullish value вместо falsy value
// Nullish: null and undefined (NOT 0 or '') - то есть если ) или "" то это будет true, а null and undefined - false
const guestsCorrect = restaurant.numGuests ?? 10
console.log(guestsCorrect);  // 0