/**
 * Created by amitthakkar on 24/11/16.
 */
/*
 * The problem is to count all the possible paths from top left to bottom right of a mXn matrix with the constraints
 * that from each cell you can either move only to right or down
 * */
(() => {
    let getPath = (matrix, i, j, path) => {
        let m = matrix.length, n = matrix[0].length;
        if (i == m - 1 && j == n - 1) {
            console.log(path);
        }
        if (i + 1 < m) {
            let iPath = path.slice();
            iPath.push(matrix[i + 1][j]);
            getPath(matrix, i + 1, j, iPath);
        }
        if (j + 1 < n) {
            let jPath = path.slice();
            jPath.push(matrix[i][j + 1]);
            getPath(matrix, i, j + 1, jPath);
        }
    };

    let countAllPathOfMatrix = (matrix) => {
        getPath(matrix, 0, 0, [1]);
    };

    let matrix = [], m = 3, n = 3, number = 1;
    for (let i = 0; i < m; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = number++;
        }
    }
    countAllPathOfMatrix(matrix);
})();
