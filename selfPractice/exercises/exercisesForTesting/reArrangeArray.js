exports.sortArrays = (num)
const row = num.length;
const column = num[0].length;

const output = Array.from({length: column}, () => []);
for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
        output[j][i] = num[i][j]
    }
    return output;


}