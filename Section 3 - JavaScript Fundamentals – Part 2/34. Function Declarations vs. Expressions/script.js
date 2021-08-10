
// function declaration - мы можем вызвать их перед тем как определим

function calcAge1(birthYear) {

  return 2037 - birthYear

}

const age1 = calcAge1(1991)

// console.log(age1);



// function expression - не можем вызвать до того как определим

const calcAge2 = function (birthYear) {
  return 2037 - birthYear
}

const age2 = calcAge2(1991)


console.log(age1, age2);