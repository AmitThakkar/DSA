/**
 * Created by amitthakkar on 04/10/16.
 */
(() => {
    let numberMatch = (input) => {
        let tempObject = {}, result = [];
        input.forEach((numbers, index) => {
            numbers.forEach((number) => {
                if (!tempObject[number]) {
                    tempObject[number] = new Set();
                }
                tempObject[number].add(index);
            })
        });
        for (var number in tempObject) {
            if (tempObject[number].size == 2) {
                result.push(number);
            }
        }
        return result;
    };

    let data = [
        [6, 2, 2, 0, 4],
        [5, 0, 2, 6, 7, 1],
        [6, 7, 9, 9],
        [4, 5, 10, 9]
    ];
    console.log(numberMatch(data));
})();