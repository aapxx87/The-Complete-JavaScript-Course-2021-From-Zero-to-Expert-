

const calcAge = function (birthYear) {

  return 2037 - birthYear

}


const yearsUntilRetirement = function (birthYear, firstName) {

  const age = calcAge(birthYear)

  const retirement = 65 - age

  if (retirement > 0) {
    console.log('>0');

    // после return выполнение функции сразу заканчивается и если что-то идет после return код до этого не дойдет
    return retirement

  } else {
    return -1
    console.log('<0');

  }



  // return `${firstName} retires in ${retirement} years.`

}



console.log(yearsUntilRetirement(1991, 'John'));
console.log(yearsUntilRetirement(1970, 'John'));