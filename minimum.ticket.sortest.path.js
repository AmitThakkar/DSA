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
        let result = {};
        while (days && days.length > 0) {
            let weightage = {}, highestWeightNumber;
            days.forEach(function (currentDay, dayIndex) {
                if (!weightage[currentDay]) {
                    weightage[currentDay] = 1;
                }
                for (let index = 1; index < 7 && index + dayIndex < days.length; index++) {
                    if (currentDay + 6 >= days[dayIndex + index]) {
                        weightage[currentDay]++
                    }
                }
                if (!highestWeightNumber || weightage[currentDay] > weightage[highestWeightNumber]) {
                    highestWeightNumber = currentDay;
                }
            });
            if (highestWeightNumber && weightage[highestWeightNumber] > 3) {
                result[highestWeightNumber] = 7;
                for (let index = 0; index < 7; index++) {
                    delete weightage[highestWeightNumber + index];
                }
            } else {
                for (let lowWeightNumber in weightage) {
                    result[lowWeightNumber] = 2;
                    delete  weightage[lowWeightNumber];
                }
            }
            days = Object.keys(weightage).map(Number);
        }
        return result;
    };

    let days;
    console.log(getMinimumPayAmount(days)); // Please Provide valid Array of days
    days = [];
    console.log(getMinimumPayAmount(days)); // Please Provide valid Array of days
    days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    console.log(getMinimumPayAmount(days)); // buy ticket for whole month worth $25
    days = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13];
    console.log(getMinimumPayAmount(days)); // { '1': 2, '2': 2, '3': 2, '7': 7 }
    days = [1, 2];
    console.log(getMinimumPayAmount(days)); // { '1': 2, '2': 2 }
    days = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 16, 17];
    console.log(getMinimumPayAmount(days)); // { '1': 2, '2': 2, '3': 2, '7': 7, '16': 2, '17': 2 }
    days = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 16, 17, 22, 23, 24, 25];
    console.log(getMinimumPayAmount(days)); // { '1': 2, '2': 2, '3': 2, '7': 7, '16': 2, '17': 2, '22': 7  }
})();