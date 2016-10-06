/**
 * Created by amitthakkar on 06/10/16.
 */
(() => {
    let monolithicArrays = (array) => {
        let result = [];
        let temp = [], lastNumber;
        array.forEach((number, index) => {
            if (!lastNumber || lastNumber < number) {
                temp.push(number);
            } else {
                result.push(temp);
                temp = [number];
            }
            if (index == array.length - 1) {
                result.push(temp);
            }
            lastNumber = number;
        });
        return result;
    };

    console.log(monolithicArrays([1, 3, 5, 8, 2, 6, 4, 1]));
})();