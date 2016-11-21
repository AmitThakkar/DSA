/**
 * Created by amitthakkar on 18/11/16.
 */
/*
 * There are given n ropes of different lengths, we need to connect these ropes into one rope. The cost to connect two 
 * ropes is equal to sum of their lengths. We need to connect the ropes with minimum cost.
 * */
(() => {
    let ropes = [4, 3, 2, 6];

    let left = (index) => {
        return (index * 2) + 1;
    };

    let right = (index) => {
        return (index * 2) + 2;
    };

    let swap = (array, i, j) => {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    let minHeapify = (array, index) => {
        let leftChildIndex = left(index);
        let rightChildIndex = right(index);
        let smallerIndex = index;
        if (leftChildIndex < array.length && array[leftChildIndex] < array[smallerIndex]) {
            smallerIndex = leftChildIndex;
        }
        if (rightChildIndex < array.length && array[rightChildIndex] < array[smallerIndex]) {
            smallerIndex = rightChildIndex;
        }
        if (smallerIndex != index) {
            swap(array, smallerIndex, index);
            minHeapify(array, smallerIndex);
        }
    };

    let extractMin = (array) => {
        let min = array[0];
        array[0] = array[array.length - 1];
        array.pop();
        minHeapify(array, 0);
        return min;
    };

    let minHeap = (array) => {
        let l = parseInt((array.length - 1) / 2);
        while (l >= 0) {
            minHeapify(array, l);
            l--;
        }
    };

    let connectRopes = (ropes) => {
        minHeap(ropes);
        let cost = 0;
        while (ropes.length > 1) {
            let fm = extractMin(ropes);
            let sm = extractMin(ropes);
            cost += fm + sm;
            ropes.unshift(fm + sm);
            minHeapify(ropes, 0);
        }
        console.log(cost);
    };

    connectRopes(ropes);
})();
