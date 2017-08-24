/**
 * Created by akumar13 on 8/24/17.
 */
const SPACE = " ";
const EMPTY_STRING = "";

String.prototype.weight = function () {
    const digits = this.split(EMPTY_STRING);
    let sum = 0;
    digits.forEach((digit) => {
        sum += parseInt(digit);
    });
    return sum;
};

function orderWeight(string) {
    const numbers = string.split(SPACE);
    numbers.sort((n1, n2) => {
        const n1Weight = n1.weight();
        const n2Weight = n2.weight();
        if (n1Weight === n2Weight) {
            return n1 > n2;
        } else {
            return n1Weight - n2Weight;
        }
    });
    return numbers.join(SPACE);
}

console.log(orderWeight("1 2 200 4 4 6 6 7 7 81 27 18 72 9 91 425 31064 7920 67407 96488 34608557 71899703"));


'81 27 18 72'
'18 27 72 81'
