//logical operators
//logical "AND"

console.log(true && true) //all values have to be TRUE for expression to be TRUE
console.log(true && false)  //gives false

//logical "OR"   - opposite
console.log(true || false) //true
console.log(false || false) //false

var ageIsMoreThanEighteen = false //16 f.e.
var isUSCitizen = false

var eligibilityForDriverLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense)

var eligibilityForDriverLicense2 = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + !eligibilityForDriverLicense2)
