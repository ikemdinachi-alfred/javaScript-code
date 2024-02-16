
const add3= require("../exercises/exercisesForTesting/calculator")
test("function add can sum two numbers",()=>{
    expect(add3(1,2)).toBe(3)
})

const sumArray= require("../exercises/exercisesForTesting/calculator")
const text = [1,2,3,4,5,6,7,8,9,10]
test("test that all arrays numbers can ",()=>{
    expect(sumArray(text)).toEqual(55)
})

