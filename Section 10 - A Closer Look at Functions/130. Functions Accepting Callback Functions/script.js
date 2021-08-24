


const oneWord = function (str) {
  // уберем все пробелы из строки (аргумент), то есть заменим ' ' на '' и приведем к нижнему регистру
  return str.replaceAll(' ', '').toLowerCase()
}


const upperFirstWord = function (str) {

  // приведем к верхнему регистру первое слово из строки (аргумент)
  // для этого методом split разобьем строку на слова по пробелу и сразу деструктурируем это в новый массив, где выделим первое слово и все остальные
  const [first, ...others] = str.split(' ')

  // склеиваем первое слово и остальные в новйю строку методом join(' ')
  return [first.toUpperCase(), ...others].join(' ')

}

// Создадим High Order Function
// первым аргументом функция будет принимать строку, а вторым функцию
const transformer = function (str, fn) {

  console.log(`Original string: ${str}`);

  console.log(`transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);

}

// вызываем функцию - первый аргумент строка, второй функция, мы не вызываем функцию, а только вставляем ее как функцию
transformer('JavaScript is the best', upperFirstWord)

transformer('JavaScript is the best', oneWord)