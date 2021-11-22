/**
 *   * Code Challenge - 09
 *   * CodeSignal - 10 - 
 *  ^ Given two strings, find the number of common characters between them.
 * 
 *  ^ Example: 
 *      For s1 = "aabcc" and s2 = "adcaa", the output should be
 *      solution(s1, s2) = 3.
 *      Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function solution(s1, s2) {
    let s1GreaterLength; 
    let s2LessLength;
    let counter = 0;
    if (s1.length >= s2.length) {
        s1GreaterLength = s1.split('');
        s2LessLength = s2.split('');;
    }else {
        s1GreaterLength = s2.split('');
        s2LessLength = s1.split('');;
    }
    for (let i = 0; i < s1GreaterLength.length; i++) {
        if (s2LessLength.includes(s1GreaterLength[i]) ) {
            s2LessLength.splice(s2LessLength.indexOf(s1GreaterLength[i]),1);
            ++counter
        } 
        // console.log('s2', s2LessLength, s1GreaterLength[i], s2LessLength.indexOf(s1GreaterLength[i]));
    }
    return counter;
}

const s1 = 'aabcc';
const s2 = 'adcaa';
console.log(solution(s1, s2))