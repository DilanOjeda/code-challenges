/**
 * ^ Given the string, check if it is a palindrome.
 * ! Example: 
 *          For inputString = "aabaa", the output should be
 *          checkPalindrome(inputString) = true;
 *          For inputString = "abac", the output should be
 *          checkPalindrome(inputString) = false;
 * [output] boolean
 *          true if inputString is a palindrome, false otherwise
 */

const verifyPalindrome = (text) => {
    const halfLengthText = Math.floor(text/2);
    let lengthText = text.length - 1;
    for (let i = 0; i < halfLengthText; i++) {
        console.log(`${text[i]} = ${text[lengthText-i]}`);
        console.log(`${lengthText}`);
        if (text[i] !== text[lengthText-i]) {
            return false;
        }
        
    }
    return true;
}
const text = 'aabaa';
console.log(verifyPalindrome(text));