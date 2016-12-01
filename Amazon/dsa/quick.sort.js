/**
 * Created by amitthakkar on 16/09/16.
 */
/*
 * Space Complexity O(n)
 * Time Complexity best and average O(n log(n)), worst O(n^2)
 * */
(() => {
    let swap = (array, i, j) => {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    let partition = (array, low, high) => {
        let pivot = array[high];
        let index = low;
        for (let j = low; j < high; j++) {
            if (array[j] <= pivot) {
                swap(array, index, j);
                index++;
            }
        }
        swap(array, index, high);
        return index;
    };

    let quickSort = (array, low, high) => {
        if (low < high) {
            let p = partition(array, low, high);
            quickSort(array, low, p - 1);
            quickSort(array, p + 1, high);
        }
    };

    let array = [5, 4, 8, 3, 2, 1];
    quickSort(array, 0, array.length - 1);
    console.log(array);
})();