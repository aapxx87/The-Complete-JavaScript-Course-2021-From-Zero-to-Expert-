
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

// --- 1 - создадим новый Set, внутрь вложим массив со строками. Set может включать в себя микс из разных типов данных
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
// в нашем примере есть дубликаты, в результате их не будет
console.log(orderSet); // Set(3) {"Pasta", "Pizza", "Risotto"}

// размер сета - количество уникальных, не повторяющихся значений
console.log(orderSet.size); // 3

// проверяем наличие определенного элемента в сете
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false

//  добавление нового элемента в сет
orderSet.add('Garlic bread')
console.log(orderSet);


// удаление элемента из сета
orderSet.delete('Risotto')
console.log(orderSet);  // Set(3) {"Pasta", "Pizza", "Garlic bread"}

// удаление всех элементов из сета
// orderSet.clear()

// мы можем проходить циклом по сету (итерабелен)
for (const order of orderSet) {
  console.log(order);  // выведет списком в консоли элементы на новой строчке каждый Pasta Pizza Garlic bread
}


//  A big USE CASE

// к примеру у нас есть массив, в котормо перечислен наш персонал по позиции каждого человека в заведеднии - all staff in restaurant
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']

// допустим нам необходимо узнать сколько разных позиций есть в заведеднии - именно позиций - уникальных значений

// для этого создаем сет, в который передаем наш массив

const staffUnique = new Set(staff)
console.log(staffUnique);  // Set(3) {"Waiter", "Chef", "Manager"}
// но сейчас это не массив, а мы хотим получить массив. Это легко, так как сет итерабелен

// используем для этого spread, который применим ко всем типам данных, которые итерабельны
const staffUniqueArray = [...new Set(staff)]
console.log(staffUniqueArray);  // (3) ["Waiter", "Chef", "Manager"]


// если нам нужно узнать просто длинну (размер) (именно уникальных значений, а не всех элементов) (странновато, но ладно), то мы можем сделать так 
console.log(new Set(staff).size); // 3


// еще один use case - допустим нам нужно узнать сколько уникальных букв содержит строка
console.log(new Set('jonasshmeddtnam').size); // 10
