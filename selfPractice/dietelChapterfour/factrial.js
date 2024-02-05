const input = require("prompt-sync")()

function factorial(number) {
    let factorial = 1;
    for (let counter = 1; counter <= number; counter++) {
        factorial = factorial * counter
    }
    return "factorial of "+ number + " is : "+ factorial;
}
let value = input("Enter factorial: ")
let newNumber = parseInt(value)
console.log(factorial(newNumber))