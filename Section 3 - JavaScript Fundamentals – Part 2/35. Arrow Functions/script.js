
// function expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear
// }

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3);



// Another example
// const yearsUntilRetirement = birthYear => {
//   const age = 2037 - birthYear
//   const retirement = 65 - age
//   return retirement
// }


const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
  return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, 'John'));