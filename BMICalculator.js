var john = {
  fullName: 'John Smith',
  mass: 90, // kg
  height: '1.6', // m
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  fullName: 'Mark Miller',
  mass: 78, // kg
  height: '1.69', // m
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
  console.log('They have the same BMI.');
}
