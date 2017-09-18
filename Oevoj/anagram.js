/**
 * Created by amitthakkar on 21/11/16.
 */
/*
 * How minimum charactors must be replace to make string anagram.
 * first half string is A and second half string is B.
 * */
(() => {
    let strings = ["aaabbb", "abc", "ab", "mnop"];
    for (let index = 0; index < strings.length; index++) {
        let str = strings[index];
        if (str.length % 2 == 0) {
            let halfLength = str.length / 2;
            let strParts = str.match(new RegExp("(.{" + halfLength + "})(.{" + halfLength + "})"));
            let firstStr = strParts[1];
            let secondStr = strParts[2];
            let tempObj = {};
            let result = firstStr.length;
            for (let i = 0; i < firstStr.length; i++) {
                if (!tempObj[firstStr[i]]) {
                    tempObj[firstStr[i]] = 0;
                }
                tempObj[firstStr[i]]++;
            }
            for (let i = 0; i < secondStr.length; i++) {
                if (tempObj[secondStr[i]]) {
                    tempObj[secondStr[i]]--;
                    if (tempObj[secondStr[i]] == 0) {
                        delete tempObj[secondStr[i]];
                    }
                    result--;
                }
            }
            console.log(result);
        } else {
            console.log(-1);
        }
    }
})();
