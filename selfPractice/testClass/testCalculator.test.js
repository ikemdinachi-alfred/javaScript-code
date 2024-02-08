const {addition,subtraction}= require('../exercises/exercisesForTesting/calculator');
test('that calculator can add',()=> {
    const result = addition(45,2)
    expect(result).toBe(47)
})
test('that calculator can subtract',()=> {
    const result = subtraction(2,45)
    expect(result).toBe(43)
})


