const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []

const totals = []



const calcTip = function (bill) {

  for (let i = 0; i < bills.length; i++) {

    tips.push(bills[i] > 50 && bills[i] < 300 ? bills[i] * 0.15 : bills[i] * 0.2)

    totals.push(bills[i] + tips[i])

  }

}



calcTip(bills)


console.log(tips);
console.log(totals);



let avg = 0;

const calcAvg = function (arr) {

  for (let i = 0; i < arr.length; i++) {
    avg = avg + arr[i]
  }

  return avg / arr.length

}

console.log(calcAvg(tips))






