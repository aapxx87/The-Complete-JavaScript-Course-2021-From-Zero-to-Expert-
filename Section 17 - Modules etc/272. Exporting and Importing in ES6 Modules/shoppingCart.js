// Step 1 - создаем новый файл для нового модуля
// Exporting module
console.log('Exporting module');


const shippingCost = 10;
const cart = [];

// для экспорта добавим export
export const addToCart = function (product, quantity) {

  cart.push({ product, quantity })

  console.log(product, quantity);

}

// мульти экспорт
const totalPrice = 237
const totalQuantity = 23

export { totalPrice, totalQuantity }


// Пример дефолтного экспорта
// дефолтный экспорт мы используем коглда нужно экспортировать только одно значение, а не переменную
// ниже пример с экспортом значения из функции 
export default function (product, quantity) {

  cart.push({ product, quantity })

  console.log(product, quantity);

}