
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



// Допустим мы хотим пройтись по всему меню (массив)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// в классическом цикле for нам требуется много шагов: установка коунтер, условий и тд
// --- в for of это делается следующим образом
for (const item of menu) console.log(item);


// --- допустим нужно получить индекс каждого элемента
for (const item of menu.entries()) {
  // console.log(item);

  // допустим мы хотим выводить список не с нулевой позиции
  console.log(`${item[0] + 1} : ${item[1]}`);
}

// item - это массив с двумя элементами - 1- позиция в массиве, вторая значение элемента


// но мы можем деструктурировать массив прямо в нутри цикла
for (const [i, el] of menu.entries()) {

  console.log(`${i + 1} : ${el}`);
}
