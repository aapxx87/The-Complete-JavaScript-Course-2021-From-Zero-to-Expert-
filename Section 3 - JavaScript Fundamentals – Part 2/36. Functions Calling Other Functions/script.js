

function cutFruitPieces(fruit) {
  return fruit * 4
}



function fruitProcesser(apples, oranges) {

  const applePices = cutFruitPieces(apples)

  const orangePices = cutFruitPieces(oranges)

  const juice = `Juice with ${applePices} apples pices and ${orangePices} oranges pices.`

  return juice

}

console.log(fruitProcesser(2, 3));