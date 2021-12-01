// 272
// Importing module
// пишем импорт
// пример переименования переменной при экспорте totalPrice as price
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
  cart
} from './shoppingCart.js'


console.log('Importing module');

console.log(cart);

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
// import add from './shoppingCart.js'

// add('pizza', 2)



// пример импортв и дефолтного значения и менованного - так делать не надо
// import add, {
//   addToCart,
//   totalPrice as price,
//   totalQuantity
// } from './shoppingCart.js'

// add('pizza', 2)
// console.log(price);


// Step 1 - пример с внешним await
// используем для примера апи с json placeholder
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')

// const data = await res.json()

// console.log(data);


// Step 1

const ShoppingCart2 = (function () {

  const cart = []
  const shippingCost = 10
  const totalPrice = 237
  const totalQuantity = 23

  const addToCart = function (product, quantity) {

    cart.push({ product, quantity })

    console.log(product, quantity);

  }


  const orderStock = function (product, quantity) {

    cart.push({ product, quantity })

    console.log(`${product}, ${quantity} ordered from supplier`);

  }

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  }

})()


ShoppingCart2.addToCart('apple', 2)

ShoppingCart2.shippingCost = 17

console.log(ShoppingCart2)

console.log(ShoppingCart2.shippingCost);






