/**
 * Created by akumar13 on 8/22/17.
 *
 * Input:  [1, 2, 3]
 * Output: [1, 2, 4]
 *
 * Input:  [1, 2, 9]
 * Output: [1, 3, 0]
 *
 * Input:  [9, 9, 9]
 * Output: [1, 0, 0, 0]
 */
class AddOneToNumberInArray {
    addOne(array) {
        let carry = 1;
        for (let index = array.length - 1; index >= 0; index--) {
            let sum = array[index] + carry;
            if (sum > 9) {
                array[index] = sum % 10;
                carry = parseInt(sum / 10);
            } else {
                array[index] = sum;
                carry = 0;
            }
        }
        while (carry > 0) {
            array.unshift(carry % 10);
            carry = parseInt(carry / 10);
        }
        return array;
    }
}

let addOneToNumberInArray = new AddOneToNumberInArray();
console.log(addOneToNumberInArray.addOne([1, 2, 3]));
console.log(addOneToNumberInArray.addOne([1, 2, 9]));
console.log(addOneToNumberInArray.addOne([9, 9, 9]));
