
exports.addition=(number1, number2)=>{
    return number1 + number2;
}
exports.subtraction=(num1, num2)=>{
    let hold = 0
    if (num1 < num2){
       hold = num1
        return num2 -hold;
    }
    else
    return  num1 - num2
}

function add3(num1, num2){
    return num1+num2
}

module.exports = add3

function sumArray(arr){
    let total = 0;
    for (let index = 0; index <arr.length ; index++) {
        total += arr[index]
    }
    return parseFloat(total);
}
module.exports = sumArray


function highestNumber(arr){
    let highest = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > highest) highest = arr[index];
    }
    return highest;
}

module.exports = highestNumber