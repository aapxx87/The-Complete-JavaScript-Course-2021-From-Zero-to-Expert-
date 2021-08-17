


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
    open: 12,
    close: 22,
  },
  wed: {
    open: 12,
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


//  ----- Looping over property names

for (const day of Object.keys(openingHours)) {
  // console.log(day);
}

// это массив будет, у которого ы можем как и со всеми массивами вычислять длинну
const properties = Object.keys(openingHours)
// console.log(properties);


// допустим мы хотим вывести строку с инфой сколько дней ресторан открыт
// console.log(`ресторан открыт ${properties.length} дней в неделю`);



//  ----- Looping over property values

const values = Object.values(openingHours)

console.log(openingHours);

for (const day of values) {
  console.log(day);
}



// ---- Loop over the entire object - для этого нам нужны entries = names + values

const entries = Object.entries(openingHours)

// console.log(entries);


// [key, value]
for (const [key, { open, close }] of entries) {
  // console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close} `);
}
