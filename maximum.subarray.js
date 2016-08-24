/**
 * Created by amitthakkar on 24/08/16.
 */
let maximumCrossSubArray = (array, minIndex, mid, maxIndex) => {
    let leftSum, rightSum, sum = 0, maxLeft, maxRight;
    for (let leftIndex = mid; leftIndex >= minIndex; leftIndex--) {
        sum += array[leftIndex];
        if (!leftSum || sum > leftSum) {
            leftSum = sum;
            maxLeft = leftIndex;
        }
    }
    sum = 0;
    for (let rightIndex = mid + 1; rightIndex <= maxIndex; rightIndex++) {
        sum += array[rightIndex];
        if (!rightSum || sum > rightSum) {
            rightSum = sum;
            maxRight = rightIndex;
        }
    }
    return [maxLeft, maxRight, leftSum + rightSum]
};

let maximumSubArray = (array, minIndex, maxIndex) => {
    if (Array.isArray(array)) {
        if (minIndex != maxIndex) {
            let mid = parseInt((minIndex + maxIndex) / 2);
            let leftSum = maximumSubArray(array, minIndex, mid);
            let rightSum = maximumSubArray(array, mid + 1, maxIndex);
            let crossSum = maximumCrossSubArray(array, minIndex, mid, maxIndex);
            if (leftSum[2] > rightSum[2] && leftSum[2] > crossSum[2]) {
                return leftSum;
            } else if (rightSum[2] > leftSum[2] && rightSum[2] > crossSum[2]) {
                return rightSum;
            } else {
                return crossSum;
            }
        } else {
            return [minIndex, maxIndex, array[maxIndex]];
        }
    } else {
        throw new Error('Not Array');
    }
};

let array = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]; 
console.log(maximumSubArray(array, 0, array.length - 1)); // [7, 10, 43]
array = [13, 20, -4, 10];
console.log(maximumSubArray(array, 0, array.length - 1)); // [0, 3, 39]
array = [-4, -10, 2, -4, 5];
console.log(maximumSubArray(array, 0, array.length - 1)); // [4, 4, 5]
array = [2, 4];
console.log(maximumSubArray(array, 0, array.length - 1)); // [ 0, 1, 6 ]
array = [-2, -4, 2, -1, 5];
console.log(maximumSubArray(array, 0, array.length - 1)); // [ 2, 4, 6 ]