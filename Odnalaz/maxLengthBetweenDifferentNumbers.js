/**
 * Created by akumar13 on 10/8/17.
 */
function solution(A) {
    var N = A.length;
    var result = 0;
    var i;
    for (i = 0; i < N; i++) {
        if (A[i] !== A[A.length - 1]) {
            result = Math.max(A.length - i - 1, result);
        }
        if (A[i] !== A[0]) {
            result = Math.max(i, result);
        }
    }
    return result;
}


console.log(solution([4, 6, 2, 2, 6, 6, 4]));
console.log(solution([4, 3, 4, 4, 4, 4, 4]));
console.log(solution([4, 4, 2, 2, 6, 4, 4]));
console.log(solution([4, 4, 4, 4, 4, 4, 4]));
console.log(solution([0, 1, 2, 3, 4, 5, 6]));
