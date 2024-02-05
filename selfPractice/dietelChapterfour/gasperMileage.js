const prompt = require("prompt-sync")()
function gasMileage(){
    let mileage = 0;
    let  gallonUsed = 0;
    let mile_per_gallon_used = 0;
    let value = "";
    let count = 0;

    while (value!=="no"){
         mileage = prompt("Enter mileage: ")
         gallonUsed = prompt("Enter how many gallon Used in liters: ")
         mile_per_gallon_used = mileage/gallonUsed;
        console.log(mile_per_gallon_used)
        count = count+ 1;
        value = prompt("Press no to stop or yes to continue ");
    }
    return mile_per_gallon_used / count;

}

console.log(gasMileage())