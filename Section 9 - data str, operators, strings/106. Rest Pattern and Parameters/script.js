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

// Spread, because on Right side of = 
const arr = [1, 2, ...[3, 4]]


// Rest patterns, because on Left side of = 
// rest элемент должен быть всегда в конце массива левой части
// может быть только один rest
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others);



// enother example
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);


// Objects - мы хотим создать новый объект с часами работы, но только первый
const { sat, ...weekdays } = restaurant.openingHours
console.log(sat);



// Functions - набор переменный объединяем в единый массив
const add = function (...numbers) {


  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }

  console.log(numbers);

  console.log(sum);

}


add(2, 3)
add(2, 3, 5, 3, 0)
add(2, 3, 5, 3, 0, 3, 8, 2, 8)


// вызываем вновь созданный метод

restaurant.orderPizza('орехи', 'лук', 'чеснок')


