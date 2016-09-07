/**
 * Created by amitthakkar on 07/09/16.
 */
(() => {
    function solution(E, L) {
        "use strict";
        let enterTime = E.split(':');
        let exitTime = L.split(':');

        let enterHour = enterTime[0];
        let enterMin = enterTime[1];
        let exitHour = exitTime[0];
        let exitMin = exitTime[1];
        let cost = 5;
        let hourDiff = exitHour - enterHour;
        if (hourDiff == 0) {
            return cost;
        } else if (hourDiff == 1) {
            if (exitMin <= enterMin) {
                return cost;
            } else {
                return cost + 4;
            }
        } else {
            cost = cost + ((hourDiff - 1) * 4);
            if (exitMin <= enterMin) {
                return cost;
            } else {
                return cost + 4;
            }
        }
    }

    console.log(solution("10:00", "13:21"));
    console.log(solution("10:20", "13:21"));
    console.log(solution("10:21", "13:21"));
    console.log(solution("10:22", "13:21"));
})();