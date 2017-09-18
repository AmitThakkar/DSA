/**
 * Created by amitthakkar on 25/11/16.
 */
/*
 * Find minimum number of coins that make a given value
 *
 * Given a value V, if we want to make change for V cents, and we have infinite supply of each of C = { C1, C2, .. , Cm}
 * valued coins, what is the minimum number of coins to make the change?
 * */
(() => {
    let getMinimumCoins = (coins, value) => {
        let minimumCoins = undefined;
        coins.forEach((coin) => {
            if (value - coin > 0) {
                let count = getMinimumCoins(coins, value - coin) + 1;
                if (minimumCoins === undefined || count < minimumCoins) {
                    minimumCoins = count;
                }
            } else if (value - coin == 0) {
                minimumCoins = 1;
            }
        });
        return minimumCoins;
    };

    let coins = [1, 2, 4, 5, 10];
    console.log(getMinimumCoins(coins, 5)); // 1
    console.log(getMinimumCoins(coins, 8)); // 2
    console.log(getMinimumCoins(coins, 10)); // 1
    console.log(getMinimumCoins(coins, 11)); // 2
    console.log(getMinimumCoins(coins, 13)); // 3
    console.log(getMinimumCoins(coins, 15)); // 2
    console.log(getMinimumCoins(coins, 17)); // 3
    console.log(getMinimumCoins(coins, 18)); // 3
    console.log(getMinimumCoins(coins, 19)); // 3
    console.log(getMinimumCoins(coins, 28)); // 3
})();
