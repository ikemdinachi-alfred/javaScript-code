
function factorial(number) {
    let pick= 1
    for (let i = number; i>0; i--) {
        pick *=i;
    }
    return pick;
}

console.log("Factorial is: "+ factorial(8))


function factorialRec(number){
    if (number==0){
        return 1;
    }else {
        return factorial(number - 1) * number;
    }
}

//console.log(factorialRec(4))

function naturalCount(number){
    let count = 0
    for (let i = 1; i <= number; i++) {
         count = count + i;

    }
    return count;
}

//console.log("The natural sum Number: "+ naturalCount(10))


