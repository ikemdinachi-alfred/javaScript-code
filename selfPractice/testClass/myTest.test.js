
const {multiplyElementByTwo} = require('../inputcollection')
test("testThatTheArrays_element_can_be_multiply_by_two",()=> {
    const myArray = [2,4,6,8,10];
    const  result = multiplyElementByTwo(myArray);
    expect(result).toEqual([4,8,12,16,20])
})

const largestNumber = require("../exercises/exercisesForTesting/calculator")
test("test That function highestNumber can get highest number from a set of numbers",()=>{
    const numbers =[100,400,24,78,900,120,32,45,56]
    expect(largestNumber(numbers)).toBe(900)
})

