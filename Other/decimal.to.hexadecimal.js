/**
 * Created by amitthakkar on 05/10/16.
 */
(() => {
    let HEXA_CODE = {
        0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'
    };
    let decimalToHexaDecimal = (number) => {
        let temp = [], result = '';
        while (number != 0) {
            temp.push(HEXA_CODE[number % 16]);
            number = parseInt(number / 16);
        }
        while (temp.length > 0) {
            result += temp.pop();
        }
        return result;
    };
    console.log(decimalToHexaDecimal(3));
    console.log(decimalToHexaDecimal(13));
    console.log(decimalToHexaDecimal(15));
    console.log(decimalToHexaDecimal(16));
    console.log(decimalToHexaDecimal(17));
    console.log(decimalToHexaDecimal(32));
    console.log(decimalToHexaDecimal(33));
    console.log(decimalToHexaDecimal(83));
    console.log(decimalToHexaDecimal(272)); // 110
    console.log(decimalToHexaDecimal(900)); // 384
})();