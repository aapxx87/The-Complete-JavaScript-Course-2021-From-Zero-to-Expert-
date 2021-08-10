const markObj = {
  firstName: 'Mark',
  mass: 78,
  height: 1.69,
  calcBMI: function () {

    this.bmi = this.mass / (this.height * this.height)

    return this.bmi
  }
}




const johnObj = {
  firstName: 'John',
  mass: 92,
  height: 1.95,
  calcBMI: function () {

    this.bmi = this.mass / (this.height * this.height)

    return this.bmi
  }
}


// markObj.calcBMI();
// johnObj.calcBMI()




const result =
  markObj.calcBMI() > johnObj.calcBMI()
    ? `${markObj.firstName}'s BMI (${markObj.bmi}) is higher than ${johnObj.firstName}'s (${johnObj.bmi})`
    : `${johnObj.firstName}'s BMI (${johnObj.bmi}) is higher than ${markObj.firstName}'s (${markObj.bmi})`


console.log(result);