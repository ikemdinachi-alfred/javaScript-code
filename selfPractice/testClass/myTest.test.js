// const {add} = require('./input)
// test("add a and b", () => {
//     let a = 12;
//     let b = 1;
//     let result = add(a, b);
//     expect(result).toBe(12)
// })



const {multiplyElementByTwo} = require('../inputcollection')
test("testThatTheArrays_element_can_be_multiply_by_two",()=> {
    const myArray = [2,4,6,8,10];
    const  result = multiplyElementByTwo(myArray);
    expect(result).toEqual([4,8,12,16,20])
})

