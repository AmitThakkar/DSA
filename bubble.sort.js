/**
 * Created by amitthakkar on 22/08/16.
 */
/*
 * Space Complexity O(1)
 * Time Complexity n*n while actual is n(n-1)/2
 * */
let bubbleSort = (array) => {
    for (let index = 0; index < array.length; index++) {
        for (let index2 = index + 1; index2 < array.length; index2++) {
            if (array[index] > array[index2]) {
                let temp = array[index];
                array[index] = array[index2];
                array[index2] = temp;
            }
        }
    }
};

let array = [5, 4, 8, 3, 2, 1];
bubbleSort(array);
console.log(array);