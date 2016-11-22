/**
 * Created by amitthakkar on 21/11/16.
 */
/*
 * 3/4 + 1/4 should print 1/1
 * 3/5 + 11/10 should print 17/10
 * */
function fractionSum(array) {
    let getGCD = (n1, n2) => {
        if (n2 == 0) {
            return n1;
        }
        return getGCD(n2, n1 % n2);
    };
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let exp = array[index];
        let numbers = exp.match(/(\d+)\/(\d+)\+(\d+)\/(\d+)$/);
        let n1 = parseInt(numbers[1]);
        let n2 = parseInt(numbers[2]);
        let n3 = parseInt(numbers[3]);
        let n4 = parseInt(numbers[4]);
        let gcd = getGCD(n2, n4);
        let lcm = n2 * n4 / gcd;
        let firstNumber = n1 * lcm / n2;
        let secondNumber = n3 * lcm / n4;
        let sum = firstNumber + secondNumber;
        let temp = getGCD(sum, lcm);
        if (temp != 1) {
            sum /= temp;
            lcm /= temp;
        }
        result.push(sum + '/' + lcm);
    }
    return result;
}

console.log(fractionSum([
    '3/4+1/4',
    '3/5+11/10'
]));
