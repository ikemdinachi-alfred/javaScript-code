// const prompt = require("prompt-sync")()
// const collect = prompt("What is your name: ")
// console.log(collect)

// const sum = (a,b)=>{
//     let ans = a + b;
//     return ans
// }
// module.exports = {sum}
//

const multiplyElementByTwo = (arry)=>{
    let newArray = []
    for (let element  of arry) {
        let ans = element * 2
        newArray.push(ans)
        
    }
    return newArray;
}

module.exports =  {multiplyElementByTwo}

