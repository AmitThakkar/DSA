/**
 * Created by amitthakkar on 28/09/16.
 */
(() => {
    let isBalanceParenthesis = (string) => {
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

    console.log(isBalanceParenthesis("a(bcd)d")); // true
    console.log(isBalanceParenthesis("(kjds(hfkj)sdhf")); // false
    console.log(isBalanceParenthesis("(sfdsf)(fsfsf")); // false
    console.log(isBalanceParenthesis("{[]}()")); // true
    console.log(isBalanceParenthesis("{[}]")); // true
    console.log(isBalanceParenthesis("{}]")); // false
})();