
//for loop
for(let i = 0; i <5; i++) {
    console.log("Hello world" + i)
}

//for of loop
 var cars = ["Volvo", "Toyota", "Tesla"]
for (let car of cars) {
    console.log(car)
    if (car == 'Toyota') 
    break
}

//ES6 syntax
cars.forEach(car => {
    console.log(car)
})