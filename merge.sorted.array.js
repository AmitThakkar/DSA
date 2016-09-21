/**
 * Created by amitthakkar on 20/09/16.
 */
function mergeArrays(a, b) {
    let result = [];
    let aIndex = 0, bIndex = 0, totalLength = a.length + b.length;
    for (let index = 0; index < totalLength; index++) {
        if (bIndex == b.length || a[aIndex] < b[bIndex]) {
            result.push(a[aIndex]);
            aIndex++;
        } else if (aIndex == a.length || a[aIndex] > b[bIndex]) {
            result.push(b[bIndex]);
            bIndex++;
        } else {
            result.push(a[aIndex]);
            result.push(b[bIndex]);
            aIndex++;
            bIndex++;
            index++
        }
    }
    return result;
}

console.log(mergeArrays([1, 5, 7, 7], [0, 1, 2, 3]));