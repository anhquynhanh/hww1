function isPalindrome(num) {
    const strNum = num.toString();
    
    for (let i = 0; i < strNum.length / 2; i++) {
        if (strNum[i] !== strNum[strNum.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(5)); // Output: true
console.log(isPalindrome(131)); // Output: true
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(12321)); // Output: true