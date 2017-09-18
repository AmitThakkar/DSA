/**
 * Created by akumar13 on 8/8/17.
 */
let findLargeNumber = (n1, n2) => {
    let minLength = n1.length < n2.length ? n1.length : n2.length;
    for (let index = 0; index < minLength; index++) {
        if (n1[index] > n2[index]) {
            return n1;
        } else if (n2[index] > n1[index]) {
            return n2;
        }
    }
    return n1;
};

let merge = (array, leftArray, rightArray) => {
    for (let index = 0, leftArrayIndex = 0, rightArrayIndex = 0; index < array.length; index++) {
        if (leftArray[leftArrayIndex] != undefined && rightArray[rightArrayIndex] != undefined) {
            let leftNumber = leftArray[leftArrayIndex];
            let rightNumber = rightArray[rightArrayIndex];
            let largeNumber = findLargeNumber(leftNumber + "", rightNumber + "");
            if(largeNumber == leftNumber) {
                array[index] = leftArray[leftArrayIndex];
                leftArrayIndex++;
            } else {
                array[index] = rightArray[rightArrayIndex];
                rightArrayIndex++;
            }
        } else if (leftArray[leftArrayIndex] != undefined) {
            array[index] = leftArray[leftArrayIndex];
            leftArrayIndex++;
        } else {
            array[index] = rightArray[rightArrayIndex];
            rightArrayIndex++;
        }
    }
    return array;
};

let mergeSort = (array) => {
    let arrayLength = array.length;
    if (arrayLength > 1) {
        let leftArray = mergeSort(array.slice(0, arrayLength / 2));
        let rightArray = mergeSort(array.slice(arrayLength / 2));
        merge(array, leftArray, rightArray)
    }
    return array;
};


console.log(mergeSort([1, 2, 8, 4, 5]).join(""));
console.log(mergeSort([0,0,0,0,0]).join(""));
