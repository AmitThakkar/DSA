/**
 * Created by shreyancejain on 07/11/16.
 */

/**
Problem:- Given a set of elements, find all possible combination of given length.
*/

(() => {
    function removeDuplicates(a) {
        var seen = {};
        return a.filter(function (item) {
            if (!seen[item]) {
                return seen[item] = true;
            }
        });
    }
    let getAllUniquePermutation = (elements, length) => {
        if (elements.length < length) {
            return "not enough elements";
        }
        if (length === 1) {
            return elements;
        }
        let finalResult = []
        elements.forEach(function (el, idx) {
            let subResults = getAllUniquePermutation(elements.filter((a) => a !== el), length - 1)
            finalResult = finalResult.concat(subResults.map(function (subResult) {
                return el.toString() + subResult
            }))
        });
        return finalResult;
    };
    console.log(getAllUniquePermutation(removeDuplicates(["B", "A", "B", "C"]), 3));
})();

