/**
 * Created by amitthakkar on 25/08/16.
 */
(() => {
    let getMinimumPayAmount = (days) => {
        if (!days || days.length == 0) {
            return 'Please Provide valid Array of days';
        }
        if (days.length >= 23) {
            return 'buy ticket for whole month worth $25';
        }
        let result = {}, total;
        for (let dayIndex = 0; dayIndex <= days.length; dayIndex++) {
            let tempResult = {}, tempTotal = 0, lastDay;
            for (let tempDayIndex = 0; tempDayIndex < days.length; tempDayIndex++) {
                if (tempDayIndex < dayIndex) {
                    if(days[tempDayIndex] + 6 < days[dayIndex]) {
                        tempTotal += tempResult[days[tempDayIndex]];
                    } else {
                        tempResult[days[tempDayIndex]] = 2;
                        tempTotal += 2;
                    }
                } else if (!lastDay || days[tempDayIndex] - lastDay > 6) {
                    lastDay = days[tempDayIndex];
                    tempResult[days[tempDayIndex]] = 7;
                    tempTotal += 7;
                } else {
                    tempResult[days[tempDayIndex]] = 0;
                }
            }
            if (!total || total > tempTotal) {
                total = tempTotal;
                result = tempResult;
            }
        }
        return [result, total];
    };

    let days;
    // console.log(getMinimumPayAmount(days)); // Please Provide valid Array of days
    // days = [];
    // console.log(getMinimumPayAmount(days)); // Please Provide valid Array of days
    // days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    // console.log(getMinimumPayAmount(days)); // buy ticket for whole month worth $25
    // days = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13];
    // console.log(getMinimumPayAmount(days)); // [ { '0': 2, '1': 2, '2': 2, '3': 7, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0 }, 13 ]
    // days = [1, 2];
    // console.log(getMinimumPayAmount(days)); // [ { '0': 2, '1': 2 }, 4 ]
    days = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 16, 17];
    console.log(getMinimumPayAmount(days)); //
})();