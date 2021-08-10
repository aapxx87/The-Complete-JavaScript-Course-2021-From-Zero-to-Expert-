
//  один из варинантов создания массива
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);


// другой вариант создания массива
const years = new Array(1991, 1984, 2008, 2020)


// допустим нам нужно вывести первый элемент из массива friends
console.log(friends[0]);
console.log(friends[2]);


// узнаем количество элементов в массиве - длинна массива
console.log(friends.length);


// вариант как получить последний элемнт из массива = lenngth - 1
// внутри [] - мы можем вставлять любое expression (это что-то что производит produces value)
console.log(friends[friends.length - 1]);


// изменение определенного элемента в массиве на другой
friends[2] = 'Jay'
console.log(friends);


// на каждой позиции в массиве идет по сути expression, которое мы можем высчитать прямо внутри или вставлять снаружи
// кроме того, мы можем вставлять один массив внутри другого
const firstname = 'Jonas'
const jonas = [firstname, 'Schmedtman', 2037 - 1991, 'teacher', friends]
console.log(jonas);


// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear
}

const years2 = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years2[0])
const age2 = calcAge(years2[1])
const age3 = calcAge(years2[2])
const age4 = calcAge(years2[3])
const age5 = calcAge(years2[4])

// const ages = new Array(age1, age2, age3, age4, age5)
const ages = new Array(calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[2]), calcAge(years2[3]), calcAge(years2[4]))

console.log(ages);
