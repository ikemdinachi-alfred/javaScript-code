
function mostOccuredNumber(num){
    let get = 0 ;
    for (let i = 0; i <num.length ; i++) {
         get = checkOccurred(number,number[i])

        }

    return get
}
function checkOccurred(num, num1){
    if (num === num1)
        return num1
}


let arr = [["Car",2000,["Toyota","Nissan"]],["Truck",500,["Ford"]],["Bike",6500,["Honda"]],["Scooter",1500]]
console.log(arr[3][0]);

arr[3].push(["javascript"])

console.log(arr[0][2])


