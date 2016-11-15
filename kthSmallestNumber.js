/**
 * Created by amitthakkar on 15/11/16.
 */
(() => {
    let parent = (i) => {
        return (i - 1) / 2;
    };

    let left = (i) => {
        return (2 * i) + 1;
    };

    let right = (i) => {
        return (2 * i) + 2;
    };

    let swap = (array, i, j) => {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    let minHeapify = (array, parentIndex) => {
        let leftValue = left(parentIndex);
        let rightValue = right(parentIndex);
        let smallestIndex = parentIndex;
        if (leftValue < array.length && array[leftValue] < array[smallestIndex])
            smallestIndex = leftValue;
        if (rightValue < array.length && array[rightValue] < array[smallestIndex])
            smallestIndex = rightValue;
        if (smallestIndex != parentIndex) {
            swap(array, smallestIndex, parentIndex);
            minHeapify(array, smallestIndex);
        }
    };

    let minHeap = (array) => {
        let l = ((array.length - 1) / 2) - 1;
        while (l >= 0) {
            minHeapify(array, l);
            l--;
        }
    };

    let removeMin = (array) => {
        array[0] = array[array.length - 1];
        array.pop();
        minHeapify(array, 0);
    };

    let kthSmallestNumber = (array, k) => {
        minHeap(array);
        for (let i = 1; i <= k - 1; i++) {
            removeMin(array);
        }
        return array[0];
    };

    let array = [4, 8, 1, 9, 3, 6, 2, 7, 5];
    console.log(kthSmallestNumber(array.slice(), 1));
    console.log(kthSmallestNumber(array.slice(), 2));
    console.log(kthSmallestNumber(array.slice(), 3));
    console.log(kthSmallestNumber(array.slice(), 4));
    console.log(kthSmallestNumber(array.slice(), 5));
    console.log(kthSmallestNumber(array.slice(), 6));
})();