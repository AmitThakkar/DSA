/**
 * Created by akumar13 on 8/23/17.
 */
class FlatArray {
    _flat(inputArray, outputArray) {
        inputArray.forEach((element) => {
            if (Array.isArray(element)) {
                this._flat(element, outputArray);
            } else {
                outputArray.push(element);
            }
        });
    }

    flat(array) {
        let flattenArray = [];
        if (array && Array.isArray(array)) {
            this._flat(array, flattenArray);
        } else {
            console.error("Invalid Input!");
        }
        return flattenArray;
    }
}

const flatArray = new FlatArray();
console.log(flatArray.flat([1, 2, [3, [4, [5, 6], [7]], [8, [9, 10]]], [11, [12, 13]]]));
