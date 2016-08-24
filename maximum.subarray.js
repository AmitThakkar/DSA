/**
 * Created by amitthakkar on 24/08/16.
 */
let maximumCrosSubArray = (leftArray, rightArray) => {
    let leftSum = 0, rightSum = 0, sum = 0, maxLeft, maxRight;
    for (let leftIndex = leftArray.length - 1; leftIndex >= 0; leftIndex--) {
        sum += leftArray[leftIndex];
        if (sum > leftSum) {
            leftSum = sum;
            maxLeft = leftIndex;
        }
    }
    sum = 0;
    for (let rightIndex = 0; rightIndex < rightArray.length; rightIndex++) {
        sum += rightArray[rightIndex];
        if (sum > rightSum) {
            rightSum = sum;
            maxRight = rightIndex;
        }
    }
    return [maxLeft, leftArray.length + maxRight, leftSum + rightSum]
};

let maximumSubArray = (array) => {
    if (Array.isArray(array)) {
        if (array.length > 1) {
            let leftArray = array.slice(0, array.length / 2);
            let rightArray = array.slice(array.length / 2);
            let leftSum = maximumSubArray(leftArray);
            let rightSum = maximumSubArray(rightArray);
            let crossSum = maximumCrosSubArray(leftArray, rightArray);
            if (leftSum[2] > rightSum[2] && leftSum[2] > crossSum[2]) {
                return leftSum;
            } else if (rightSum[2] < leftSum[2] && rightSum[2] > crossSum[2]) {
                return rightSum;
            } else {
                return crossSum;
            }
        } else if (array.length == 1) {
            return [0, 0, array];
        } else {
            throw new Error('Empty Array!');
        }
    } else {
        throw new Error('Not Array');
    }
};

let array = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
// let array = [13, 20, -4, 10];
console.log(maximumSubArray(array));