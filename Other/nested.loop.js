/**
 * Created by amitthakkar on 23/09/16.
 */
(() => {
    function nestedLoop(nestedDepth, loopArray) {
        let result = [];
        if (!Array.isArray(loopArray)) {
            loopArray = [...Array(loopArray).keys()];
        }
        const tempArray = [];
        let loopOnArray = (start, index) => {
            if (index == nestedDepth) {
                result.push(tempArray.slice());
            } else {
                for (let i = start; i < loopArray.length; i++) {
                    tempArray[index] = loopArray[i];
                    loopOnArray(i + 1, index + 1)
                }
            }
        };
        loopOnArray(0, 0);
        return result;
    }

    console.log(nestedLoop(3, 5));
    /*
     * Output 
     * [ 
     *      [ 0, 1, 2 ],
     *      [ 0, 1, 3 ],
     *      [ 0, 1, 4 ],
     *      [ 0, 2, 3 ],
     *      [ 0, 2, 4 ],
     *      [ 0, 3, 4 ],
     *      [ 1, 2, 3 ],
     *      [ 1, 2, 4 ],
     *      [ 1, 3, 4 ],
     *      [ 2, 3, 4 ] 
     * ]
     * */
    console.log(nestedLoop(3, [1, 2, 3, 4, 5]));
    /*
     * Output
     * [
     *      [ 1, 2, 3 ],
     *      [ 1, 2, 4 ],
     *      [ 1, 2, 5 ],
     *      [ 1, 3, 4 ],
     *      [ 1, 3, 5 ],
     *      [ 1, 4, 5 ],
     *      [ 2, 3, 4 ],
     *      [ 2, 3, 5 ],
     *      [ 2, 4, 5 ],
     *      [ 3, 4, 5 ] 
     * ]
     * */
})();