
/**
 *   * Code Challenge - 08
 *   * CodeSignal - 09
 *  ^ Given an array of strings, return another array containing all of its longest strings.
 * 
 *  ^ Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
 *  ^ Sequence containing only one element is also considered to be strictly increasing.
 * 
 *  ^ Example: 
 *      For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
 *      solution(inputArray) = ["aba", "vcd", "aba"].
*/


function getAllLongestString(inputArray) {
    let longestLength = inputArray[0].length;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longestLength) longestLength = inputArray[i].length;
    }
    let outputArray = [];
    for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[j].length === longestLength) outputArray.push(inputArray[j]);
    }
    console.log(longestLength, outputArray);
    return outputArray;
}

const inputArray = ["aba", "aa", "ad", "vcd", "aba"];

getAllLongestString(inputArray);