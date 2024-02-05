let input = require("prompt-sync")()
function tablularOutput() {
    let number = 1;
    for (let count = 0; count < 5; count++) {
    console.log(number+ "\t" + number* number + "\t" + number* number* number+ "\t" + number* number* number )
    number+=1;
    }
}
console.log(tablularOutput())