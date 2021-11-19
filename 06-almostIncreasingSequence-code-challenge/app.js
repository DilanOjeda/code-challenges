
/**
 *   * Code Challenge - 06
 *  ^ Given a sequence of integers as an array, determine whether it is possible to obtain 
 *  ^ a strictly increasing sequence by removing no more than one element from the array.
 * 
 *  ^ Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
 *  ^ Sequence containing only one element is also considered to be strictly increasing.
 * 
 *  ^ Example: 
 *      For sequence = [1, 3, 2, 1], the output should be
 *      almostIncreasingSequence(sequence) = false.
 *      There is no one element in this array that can be removed in order to get a strictly increasing sequence.
 * 
 *      For sequence = [1, 3, 2], the output should be
 *      almostIncreasingSequence(sequence) = true.
 *      You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, 
 *      you can remove 2 to get the strictly increasing sequence [1, 3].
*/

const almostIncreasingSequence = (sequence) => {
    let counter = 0;
    //[1, 2, 3, 4, 5, 3, 5, 6]
    if (sequence.length <= 2) return true;
    for (let i = 1; i < sequence.length-1; i++) {
        console.log(`! ${sequence[i-1]} <= ${sequence[i]}`);
        if (!(sequence[i-1] <= sequence[i])) {
            counter++;  
            if (!(sequence[i-2] <= sequence[i] && sequence[i-1] <= sequence[i+1])) {
                console.log(`! ${sequence[i-2]} <= ${sequence[i]} && ${sequence[i-1]} <= ${sequence[i+1]}`);
                return false;
            }
        } 
    }
    return counter <= 1;
}

const almostIncreasingSequence2 = (sequence) => {
    let counter = 0;
    if (sequence.length <= 2) return true;
    for (let i = 0; i < sequence.length; i++) {
        console.log(`${sequence[i]} <= ${sequence[i-1]}`);
        if (sequence[i] <= sequence[i-1]) {
            counter++;  
            if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
                console.log(`${sequence[i]} <= ${sequence[i-2]} && ${sequence[i+1]} <= ${sequence[i-1]}`);
                return false;
            }
        } 
    }
    return counter <= 1;
}
//[1,3,2,1]

//[1, 2, 1, 2]
//false
//[1, 2, 3, 4, 5, 3, 5, 6]
//false
//[40, 50, 60, 10, 20, 30]
//false

//[1, 2, 5, 3, 5]
//true
const sequence = [40, 50, 60, 10, 70, 30]
console.log(almostIncreasingSequence(sequence)); 