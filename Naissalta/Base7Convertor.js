/**
 * Created by akumar13 on 8/24/17.
 */
function convert(input) {
    const base7Codes = {
        0: '0',
        1: 'a',
        2: 't',
        3: 'l',
        4: 's',
        5: 'i',
        6: 'n'
    };

    if (!input || input === "") {
        return input;
    } else {
        let result = "";
        while (input > 0) {
            let mode = input % 7;
            input = parseInt(input / 7);
            result = base7Codes[mode] + result;
        }
        return result;
    }
}

console.log(convert(4));
console.log(convert(7));
console.log(convert(7792875));
