const {sortArray}= require('../exercises/exercisesForTesting/reArrangeArray');

test("test_that_array_reArranges",()=>{
    const myArray = [[2,3][4,5]]
    exports([[2,5][3,5]]).toBe(myArray)
})