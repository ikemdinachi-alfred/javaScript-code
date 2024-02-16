

const {changeTozero} = require("../exercises/class work/changeToZeros")
test("testThatColumWithSingleZeroChangesAllToZero",()=>{
    const number1 =[[0,5][2,3]]
    const expected =  changeTozero(number1)
    expect(expected).toEqual([[0,0],[2,3]])
})