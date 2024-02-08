
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