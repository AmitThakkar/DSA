/**
 * Created by amitthakkar on 23/09/16.
 */
(() => {
    function _max(n1, n2) {
        return n1 > n2 ? n1 : n2;
    }

    function cutRod(prices, length) {
        if (length == 0) {
            return 0;
        }
        let q = -1;
        for (let index = 1; index <= length; index++) {
            q = _max(q, prices[index - 1] + cutRod(prices, length - index));
        }
        return q;
    }

    let prices = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    let bestPrices = [];
    for (let length = 1; length <= 10; length++) {
        bestPrices.push(cutRod(prices, length));
    }

    console.log(bestPrices);
})();