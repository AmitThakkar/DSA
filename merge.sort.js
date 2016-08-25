/**
 * Created by amitthakkar on 22/08/16.
 */
/*
 * Space Complexity O(n)
 * Time Complexity O(n log(n))
 * */
(() => {
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

    let mergeSort = (array) => {
        if (Array.isArray(array)) {
            if (array.length > 1) {
                let sortedLeftArray = mergeSort(array.slice(0, array.length / 2));
                let sortedRightArray = mergeSort(array.slice(array.length / 2));
                return merge(array, sortedLeftArray, sortedRightArray);
            } else {
                return array;
            }
        } else {
            throw new Error('Not Array');
        }
    };

    let array = [5, 4, 8, 3, 2, 1];
    mergeSort(array);
    console.log(array);
})();