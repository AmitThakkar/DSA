/**
 * Created by amitthakkar on 28/09/16.
 */
let isValidBraces = (string) => {
    let stack = [], isBalance = true, temp;
    for (let index = 0; index < string.length && isBalance; index++) {
        switch (string[index]) {
            case '(':
            case '{':
            case '[':
                stack.push(string[index]);
                break;
            case ')':
                temp = stack.pop();
                if (temp != '(') {
                    isBalance = false;
                }
                break;
            case '}':
                temp = stack.pop();
                if (temp != '{') {
                    isBalance = false;
                }
                break;
            case ']':
                temp = stack.pop();
                if (temp != '[') {
                    isBalance = false;
                }
                break;
        }
    }
    if (stack.length > 0) {
        isBalance = false;
    }
    return isBalance;
};

console.log(isValidBraces("a(bcd)d")); // true
console.log(isValidBraces("(kjds(hfkj)sdhf")); // false
console.log(isValidBraces("(sfdsf)(fsfsf")); // false
console.log(isValidBraces("{[]}()")); // true
console.log(isValidBraces("{[}]")); // true
console.log(isValidBraces("{}]")); // false
