/**
 * Created by akumar13 on 8/24/17.
 */
const EMPTY_STRING = "";
function LookAndSay(number, n) {
    if (n === 1) {
        let result = EMPTY_STRING;
        number = number + EMPTY_STRING;
        let tempDigit = EMPTY_STRING, tempCount = 0;
        for (let digitIndex = 0; digitIndex < number.length; digitIndex++) {
            if (tempDigit === number[digitIndex]) {
                tempCount++;
            } else {
                if (tempDigit && tempDigit !== EMPTY_STRING) {
                    result += (tempCount + tempDigit);
                }
                tempDigit = number[digitIndex];
                tempCount = 1;
            }
        }
        result += (tempCount + tempDigit);
        return result;
    } else if (n > 1) {
        return LookAndSay(LookAndSay(number, n - 1), 1);
    } else {
        return EMPTY_STRING;
    }
}

console.log(LookAndSay(1211, 1));
console.log(LookAndSay(1, 2));
console.log(LookAndSay(1, 3));
