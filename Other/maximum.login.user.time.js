/**
 * Created by amitthakkar on 04/10/16.
 */
(() => {
    let maximumLoginUserTime = function (input) {
        let result = {}, maxTime;
        input.forEach((element) => {
            for (let inTime = element.login; inTime < element.logout; inTime++) {
                if (!result[inTime]) {
                    result[inTime] = 0;
                }
                result[inTime]++;
                if (!maxTime) {
                    maxTime = inTime;
                } else if (result[inTime] > result[maxTime]) {
                    maxTime = inTime;
                }
            }
        });
        return [maxTime, result];
    };

    let sampleData = [
        {user: 1, login: 1, logout: 3},
        {user: 2, login: 3, logout: 4},
        {user: 3, login: 1, logout: 2},
        {user: 4, login: 6, logout: 7},
        {user: 5, login: 1, logout: 3},
        {user: 6, login: 2, logout: 4},
        {user: 7, login: 2, logout: 5},
        {user: 8, login: 2, logout: 3}
    ];
    console.log(maximumLoginUserTime(sampleData));
})();