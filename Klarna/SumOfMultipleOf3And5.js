/**
 * Created by akumar13 on 8/24/17.
 */
function solution(number) {
    if (number < 4) {
        return 0;
    }
    let sum = 0;
    for (let index = 3; index < number; index++) {
        if (index % 3 === 0 || index % 5 === 0) {
            sum += index;
        }
    }
    return sum;
}

console.log(solution(10));
console.log(solution(5));
console.log(solution(3));
console.log(solution(4));
console.log(solution(6));
console.log(solution(-6));
