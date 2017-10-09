/**
 * Created by akumar13 on 10/8/17.
 */

function solution(A, B, C, D, E, F) {
    let array = [A, B, C, D, E, F];
    array.sort();
    let count = 0, isValid = true;
    array.forEach((number, idx) => {
        if (number > 9) {
            isValid = false;
        } else if (number > 6) {
            count++;
            if (count > 3) {
                isValid = false;
            }
        }
    });

    if (isValid) {
        if (count === 3) {
            array.splice(1, 0, array.splice(3, 1)[0]);
            array.splice(3, 0, array.splice(4, 1)[0]);
        }
        let result = "";
        if (array[0] < 3) {
            result += array[0];
        } else return "NOT POSSIBLE";
        if (array[0] === 2 && array[1] > 3) {
            return "NOT POSSIBLE";
        } else result += (array[1] + ":");

        if (array[2] < 6) {
            result += array[2];
        } else return "NOT POSSIBLE";
        if (array[4] < 6) {
            result += (array[3] + ":");
        } else {
            result += (array[4] + ":");
            array[4] = array[3];
        }

        if (array[4] < 6) {
            result += array[4];
        } else return "NOT POSSIBLE";
        result += array[5];
        return result;
    } else return "NOT POSSIBLE";
}


console.log(solution(2, 4, 5, 9, 5, 8));
console.log(solution(2, 3, 5, 9, 5, 8));
console.log(solution(1, 8, 3, 2, 6, 4));
console.log(solution(0, 0, 0, 0, 0, 0));
console.log(solution(0, 0, 0, 0, 0, 10));
console.log(solution(0, 0, 0, 7, 8, 9));
console.log(solution(0, 0, 6, 7, 8, 9));
console.log(solution(2, 3, 5, 9, 5, 9));
console.log(solution(2, 9, 5, 9, 5, 3));
