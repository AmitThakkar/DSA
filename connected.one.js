/**
 * Created by amitthakkar on 17/11/16.
 */
(() => {
    let array1 = [
        [1, 1, 1, 0],
        [1, 0, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 0, 0]
    ];
    let array2 = [
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 0, 0]
    ];
    let array3 = [
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 0]
    ];

    let getConnectedOneCount = (array, length, width, i, j) => {
        let count = 1;
        if (j + 1 < width && array[i][j + 1] === 1) {
            array[i][j + 1] = 0;
            count += getConnectedOneCount(array, length, width, i, j + 1);
        }
        if (i + 1 < length && array[i + 1][j] === 1) {
            array[i + 1][j] = 0;
            count += getConnectedOneCount(array, length, width, i + 1, j);
        }
        if (i + 1 < length && j + 1 < width && array[i + 1][j + 1] === 1) {
            array[i + 1][j + 1] = 0;
            count += getConnectedOneCount(array, length, width, i + 1, j + 1);
        }
        return count;
    };

    let maxConnectedOne = (input) => {
        let length = input.length;
        let width = input[0].length;
        let maxConnectedOnesCount = 0;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < width; j++) {
                if (input[i][j] === 1) {
                    input[i][j] = 0;
                    let count = getConnectedOneCount(input, length, width, i, j);
                    if (count > maxConnectedOnesCount) {
                        maxConnectedOnesCount = count;
                    }
                }
            }
        }
        return maxConnectedOnesCount;
    };

    console.log(maxConnectedOne(array1)); // 6
    console.log(maxConnectedOne(array2)); // 5
    console.log(maxConnectedOne(array3)); // 4
})();
