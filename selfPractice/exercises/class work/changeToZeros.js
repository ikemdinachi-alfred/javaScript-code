
    function changeTozero (number){

        for (let column = 0; column < number.length; column++) {
            for (let row = 0; row < number[column].length; row++) {
                if (number[column][row] === 0) {
                    number[column][row] = 0
                }
            }
    }
        return number;

}
    const number1 =[[0,5],[2,7]]

console.log(changeTozero(number1))




