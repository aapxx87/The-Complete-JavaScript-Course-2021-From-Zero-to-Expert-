
function logger() {
  console.log('My name is Jonas');
}

// calling, running or invoking function
logger()


// функция принимает параметры
function fruitProcesser(apples, oranges) {


  const juice = `Juice with ${apples} apples and ${oranges} oranges.`

  // возвращаем результат функции
  return juice

}


// результат, который возвращает функция нужно сохранить в переменную (capture value into any variable)
const result = fruitProcesser(5, 0)

console.log(result);