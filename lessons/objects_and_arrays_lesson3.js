//objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}

//console.log(customer)
console.log(customer.firstName)
console.log(customer['lastName'])

customer.firstName = "Mike"
//bracket notation
customer['lastName'] = "Silver"

console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var car = ["Volvo", "Toyota", "Tesla"] //arrays
console.log(car[1])
car[1] = "Suzuki"
console.log(car[1])
console.log(customer.cars[2])
