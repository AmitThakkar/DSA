/**
 * Created by amitthakkar on 21/11/16.
 */
/*
 * qaewabcddcbaweqabba
 * */
(() => {
    let isPalindrome = (inputString, i, j, length) => {
        let count = 0;
        if (inputString[i - length] === inputString[j + length] && i - length >= 0 && j + length < inputString.length) {
            count += (2 + isPalindrome(inputString, i, j, length + 1));
        }
        return count;
    };

    let max = (m1, m2, m3) => {
        return m1 > m2 ? m1 > m3 ? m1 : m3 : m2 > m3 ? m2 : m3;
    };

    let findLargestPalindromeString = (inputString) => {
        let maxCount = 0;
        for (let index = 0; index < inputString.length; index++) {
            let m1 = isPalindrome(inputString, index, index, 1) + 1;
            let m2 = isPalindrome(inputString, index, index + 1, 0);
            maxCount = max(m1, m2, maxCount);
        }
        console.log(maxCount);
    };

    findLargestPalindromeString("abba"); // 4 
    findLargestPalindromeString("caacabbaabba"); // 8
    findLargestPalindromeString("caacabbaabb"); // 6
    findLargestPalindromeString("caacabaa"); // 6
    findLargestPalindromeString("acabaa"); // 6
})();
