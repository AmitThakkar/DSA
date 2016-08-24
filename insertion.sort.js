/**
 * Created by amitthakkar on 22/08/16.
 */
/*
 * Space Complexity O(1)
 * Time Complexity O(n^2) while actual is n(n-1)/2
 * */
let insertionSort = (array) => {
    for (let index = 1; index < array.length; index++) {
        let currentValue = array[index];
        let index2 = index - 1;
        for (; index2 >= 0 && array[index2] > currentValue; index2--) {
            array[index2 + 1] = array[index2];
        }
        array[index2 + 1] = currentValue;
    }
};

let array = [5, 4, 8, 3, 2, 1];
insertionSort(array);
console.log(array);