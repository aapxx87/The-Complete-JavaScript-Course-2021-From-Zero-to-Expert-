// Importing module
// пишем импорт
// пример переименования переменной при экспорте totalPrice as price
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity
// } from './shoppingCart.js'


console.log('Importing module');

// console.log(shippingCost);

// addToCart('bread', 5)
// console.log(price, totalQuantity);


// пример экспорта сразу всего
// import * as ShoppingCart from './shoppingCart.js'

// // console.log(ShoppingCart);

// // Обращаемся как к свойствам объекта
// ShoppingCart.addToCart('bread', 5)

// console.log(ShoppingCart.totalPrice);


// при импорте дефолтных значений мы можем дать любые имена 
import add from './shoppingCart.js'

add('pizza', 2)



// пример импортв и дефолтного значения и менованного - так делать не надо
// import add, {
//   addToCart,
//   totalPrice as price,
//   totalQuantity
// } from './shoppingCart.js'

// add('pizza', 2)
// console.log(price);




