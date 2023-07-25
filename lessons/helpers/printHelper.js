export function printAge(age) {
    console.log(age) 
}

export class CustomerDetails {

    printFirstName(firstName) {
        console.log(firstName)
    }

    /**
     * this method will print the lastName
     * @param {String} lastName 
     */
    printLastName(lastName) {
        console.log(lastName)
    }

}

export var customerDetails = new CustomerDetails() //create an instance of the class