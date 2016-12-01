/**
 * Created by amitthakkar on 20/11/16.
 */
/*
 * Given an n x n matrix, where every row and column is sorted in increasing order. Given a number x, how to decide
 * whether this x is in the matrix. The designed algorithm should have linear time complexity.
 * */
(() => {
    let searchInSortedMatrix = (matrix, searchingNumber) => {
        let i = 0, j = matrix[0].length - 1;
        while (true) {
            let x = matrix[i][j];
            if (x === searchingNumber) {
                console.log('Found at', i, j);
                break;
            } else if (searchingNumber > x) {
                i++;
            } else {
                j--;
            }
            if (j < 0 || i == matrix.length) {
                console.log('Not Found!');
                break;
            }
        }
    };

    let matrix1 = [
        [1, 10, 20, 30, 40],
        [3, 12, 24, 33, 45],
        [5, 14, 27, 37, 47],
        [8, 17, 28, 39, 48],
        [9, 20, 29, 40, 50]
    ];

    searchInSortedMatrix(matrix1, 33);
})();
