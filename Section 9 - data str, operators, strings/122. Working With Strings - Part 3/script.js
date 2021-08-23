

// разделим строку по символу +, то есть сохраним в массив по элементу все что между ним
console.log('a+very+nice+string'.split('+'));
console.log('Ivan Lavrov'.split(' '));

// пример сразу создание переменных - destructuring
const [firstName, lastName] = 'Ivan Lavrov'.split(' ')
console.log(firstName);
console.log(lastName);

// ------ допустим мы хотим lastName сделать большими буквами и добавить к нему Mister
const newLastName = `Mister ${lastName.toUpperCase()}`
console.log(newLastName);

// альтернативный вариант с методом join
// в join можно использовать любые аргументы для соединения слов
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ') // Mister LAVROV
console.log(newName); // Mr. Ivan LAVROV






// пример - делаем большой первую букву каждой части имени при помощи функции

const capitalizename = function (name) {

  // const [...names] = name.split(' ')

  const names = name.split(' ')

  let newName2 = ''

  const nameUpperArr = []

  for (const item of names) {

    // newName2 = item[0].toUpperCase() + item.slice(1)
    // nameUpperArr.push(newName2)
    // вариант быстрее чем с переменной

    nameUpperArr.push(item[0].toUpperCase() + item.slice(1))

  }


  const result = nameUpperArr.join(' ')
  console.log(result);

}

capitalizename('jessica ann smith davis')
capitalizename('ivan petrov')



// альтернативный вариант с метолом replace

const capitalizename2 = function (name) {

  const names = name.split(' ')

  const newNames = []

  for (const item of names) {
    newNames.push(item.replace(item[0], item[0].toUpperCase()))
  }

  console.log(newNames.join(' '));

}


capitalizename2('jessica ann smith davis')
capitalizename2('ivan petrov')


//  ---- Padding strings
const message = 'Go to gate 23!'

// метод принимает два аргмумента - длинна до которйо хотим довести и знаки которыми заполняем недостающее количество
console.log(message.padStart(23, '+'));  // +++++++++Go to gate 23!
console.log('Ivan'.padStart(23, '+').padEnd(40, "="));





// ----- пример с маскированием номера карты
const maskCreditCard = function (number) {

  const str = String(number)

  // альтернативный вариант приведения к строке
  // const str = number + ''

  const hiddenNumber = str.slice(-4).padStart(str.length, '*')

  // str.slice(-4) - отрезаем все до последних 4 знаков

  return hiddenNumber

}


console.log(maskCreditCard(1234012301230123));
console.log(maskCreditCard(301230123));


// ----- Repeat method - позволяет нам повторить определенную строку несколько раз
const message2 = 'Bad weather... All Departures delaued...'
console.log(message2.repeat(5));