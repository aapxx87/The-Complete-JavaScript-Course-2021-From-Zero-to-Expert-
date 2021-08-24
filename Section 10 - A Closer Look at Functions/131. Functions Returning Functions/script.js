

// пример как одна функция возвращает другую
const greet = function (greeting) {

  return function (name) {
    console.log(`${greeting} ${name}`);
  }

}



// функция greet возвращает внутреннюю функцию, которую мы сохраняем в переменную greeterHey и затем можем вызвать (см ниже)
const greeterHey = greet('Hey')

greeterHey('Jonas')
greeterHey('Steven')


// можно сделать вызов в одну строку
greet('Hello')('Jonas')


// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas')