
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
]

const types = []


// выводим все элементы массива
for (let i = 0; i < jonasArray.length; i++) {

  // Reading from araay
  // console.log(jonasArray[i]);

  // Filling types array
  // types[i] = typeof jonasArray[i]
  types.push(typeof jonasArray[i])

}


// console.log(types);





// Another example
const years = [1991, 2007, 1969, 2020]

const ages = []

for (i = 0; i < years.length; i++) {
  ages.push(2037 - years[i])
}

// console.log(ages);





// CONTINUE AND BREAK


// Continue

// допустим нам нужно вывести только те элементы массива, которые являются строчками
for (let i = 0; i < jonasArray.length; i++) {

  // --- Only strings
  // все что не строка будет пропущено
  if (typeof jonasArray[i] !== 'string') continue

  // после if дальше код уже не читается

  console.log(jonasArray[i], typeof jonasArray[i]);

}


// Break

// допустим мы хотим, чтобы после того как будет найдено первое число среди элементов массива, дальше ничего не выводилось
for (let i = 0; i < jonasArray.length; i++) {

  if (typeof jonasArray[i] === 'number') break

  console.log(jonasArray[i], typeof jonasArray[i]);

}

