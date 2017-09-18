/**
 * Created by akumar13 on 8/24/17.
 */
function compute(instructions) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const hexaDigits = {10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'};
    let dropIndex = 0;
    let hasAnyBlockPicked = false;
    for (let instructionIndex = 0; instructionIndex < instructions.length; instructionIndex++) {
        let command = instructions[instructionIndex];
        switch (command) {
            case 'P':
                dropIndex = 0;
                hasAnyBlockPicked = true;
                break;
            case 'M':
                if (dropIndex < 9) {
                    dropIndex++;
                }
                break;
            case 'L':
                if (hasAnyBlockPicked && result[dropIndex] < 15) {
                    result[dropIndex]++;
                    dropIndex = 0;
                    hasAnyBlockPicked = false;
                }
                break;
        }
    }
    result = result.map((number) => {
        if (number < 10) {
            return number;
        } else {
            return hexaDigits[number];
        }
    });
    return result.join("");
}
