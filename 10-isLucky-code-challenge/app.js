/**
 *   * Code Challenge - 10
 *   * CodeSignal - 11
 *  ^ addUpDigits
 * 
 *  ^ Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky 
 *  ^ if the sum of the first half of the digits is equal to the sum of the second half.
 * 
 *  ^ Example: 
 *      For n = 1230, the output should be
 *      solution(n) = true;
*/



function solution(n) {
    let number = String(n);
    let numberLenthg = number.length;
    let firstHalf = number.slice(0,numberLenthg/2);
    let secondHalf = number.slice(numberLenthg/2, numberLenthg);
    return addUpDigits(firstHalf) === addUpDigits(secondHalf);
}

const addUpDigits = (digits) => {
    let total = 0;
    for (let i = 0; i < digits.length; i++) {
        total += Number(digits[i]);
    }
    console.log('total', total)
    return total;
}


console.log(solution(239017))
// solution(123456)