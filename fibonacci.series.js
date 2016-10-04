/**
 * Created by amitthakkar on 03/10/16.
 */
(() => {
    let fibonacciLoop = (n) => {
        if (n == 0) {
            return [0];
        } else if (n == 1) {
            return [1];
        } else if (n < 0) {
            return [-1];
        } else {
            let result = [0, 1];
            let n1 = 0, n2 = 1, next;
            for (let index = 2; index < n; index++) {
                next = n1 + n2;
                n1 = n2;
                n2 = next;
                result.push(next);
            }
            return result;
        }
    };
    console.log(fibonacciLoop(-2));
    console.log(fibonacciLoop(0));
    console.log(fibonacciLoop(1));
    console.log(fibonacciLoop(2));
    console.log(fibonacciLoop(5));
})();