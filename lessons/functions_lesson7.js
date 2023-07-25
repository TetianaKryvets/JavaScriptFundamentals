//declarative function
//hellowOne() can be called in the beginning of the file even if the function declate a bit later, can be invoke in any place

helloOne() //it will work
function helloOne() {
    console.log("Hello one!")
}

//helloOne()

//Anonymous functions - it will not work if you called before
var hellowTwo = function() {
    console.log("Hello two!")
}
hellowTwo()

//ES6 function or arrow function - do not provide 'function word'
var hellowThree = () => {
    console.log("hello tree!")
}
hellowThree()

//functions with arguments
function printName(name, lastName) {
    console.log(name, lastName)
}
printName("John", "Smith")

//function with return
function multiplyByTwo(number) {
    var result = number +2;
    return result
}
var myResults = multiplyByTwo(5)
console.log(myResults)

//import function
import { printAge } from '../lessons/helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../lessons/helpers/printHelper.js'
helper.printAge(10)