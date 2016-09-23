/**
 * Created by amitthakkar on 23/09/16.
 */
(() => {
    let numbers = [1, 2, 3];
    let sum = 4;
    let results = [];

    function getAllCombinations(numbers, sum, result) {
        if (sum == 0) {
            results.push(result);
            return;
        } else if (sum < 0) {
            return;
        }
        for (let index = 0; index < numbers.length; index++) {
            let tempResult = result.slice();
            tempResult.push(numbers[index]);
            getAllCombinations(numbers, sum - numbers[index], tempResult);
        }
    }

    getAllCombinations(numbers, sum, []);
    console.log(results);
})();