/**
 * Created by akumar13 on 8/3/17.
 */
function solution(A) {
    if (A.length > 1) {
        let sortedArray = mergeSort(A);
        let minimumDistance;
        for (let index = 1; index < sortedArray.length; index++) {
            let difference = getDifference(sortedArray[index], sortedArray[index - 1]);
            if (minimumDistance === undefined || minimumDistance > difference) {
                minimumDistance = difference
            }
        }
        return minimumDistance;
    }
}

function getDifference(n1, n2) {
    return n1 > n2 ? n1 - n2 : n2 - n1;
}

function mergeSort(array) {
    if (Array.isArray(array)) {
        if (array.length > 1) {
            let sortedLeftArray = mergeSort(array.slice(0, array.length / 2));
            let sortedRightArray = mergeSort(array.slice(array.length / 2));
            return merge(array, sortedLeftArray, sortedRightArray);
        } else {
            return array;
        }
    }
}

let merge = (array, leftArray, rightArray) => {
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        let leftValue = leftArray[leftArrayIndex];
        let rightValue = rightArray[rightArrayIndex];
        if (leftValue < rightValue || !rightValue) {
            array[arrayIndex] = leftValue;
            leftArrayIndex++;
        } else if (rightValue < leftValue || !leftValue) {
            array[arrayIndex] = rightValue;
            rightArrayIndex++;
        } else {
            array[arrayIndex++] = leftValue;
            leftArrayIndex++;
            array[arrayIndex] = rightValue;
            rightArrayIndex++;
        }
    }
    return array;
};

console.log(solution([2, 4]));
console.log(solution([2, 8, 3, 9]));
console.log(solution([7, 21, 3, 42, 3, 7]));
console.log(solution([8, 24, 3, 20, 1, 17]));