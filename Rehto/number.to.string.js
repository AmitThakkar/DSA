/**
 * Created by amitthakkar on 30/09/16.
 */
(() => {
    let numberToString = (number) => {
        let stack = [];
        while (number > 0) {
            stack.push(number % 10);
            number = parseInt(number / 10);
        }
        let result = '';
        while (stack.length > 0) {
            result += stack.pop();
        }
        return result;
    };
    console.log(numberToString(1234));
})();