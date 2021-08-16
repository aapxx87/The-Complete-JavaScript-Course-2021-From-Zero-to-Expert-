

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
  // создадим метод, который пропустит через себя объект и деструктурирует его
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} and ${time}`);

  }
};

// ---- вызываем метод из объекта restaurant
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Solo 23',
  mainIndex: 2,
  starterIndex: 2,
})















// --- для деструктурирование объекта мы должны переменные назвать ровно так-же как и свойства объекта, порядок следование не важен
const { name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories);


// --- допустим мы хотим дать имена переменным отличным от свойств в объекте
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
console.log(restaurantName, hours, tags);


// --- дефолтные значения для свойств, которые не существуют в объекте
const { menu = ['non-exist'], starterMenu: starters = [] } = restaurant
console.log(menu, starters);





// --- mutating variables
let a = 111;
let b = 999;

// объект, который хотим деструктурировать
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);



// --- nested objects - на примере openingHours
// мы хотим две переменные - одну для open, вторую для close (они должны называться точно также как и свойства), но можем назвать и по другому
const { fri: { open: o, close: c } } = openingHours
console.log(o, c);

