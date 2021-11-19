/**
 *   * Code Challenge - 04
 *  ^ Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
 *  ^ each statue having an non-negative integer size. Since he likes to make things perfect,
 *  ^ he wants to arrange them from smallest to largest so that each statue will be bigger 
 *  ^ than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. 
 *  ^ Help him figure out the minimum number of additional statues needed.
 * 
 *  ^ Example: 
 *      For statues = [6, 2, 3, 8], the output should be
 *      makeArrayConsecutive2(statues) = 3;
 *  
 *      Ratiorg needs statues of sizes 4, 5 and 7 
*/

function makeArrayConsecutive(statues) {
    statues.sort((a,b) => a-b);
    console.log(statues)
    const initial= statues[0];
    const final = statues[statues.length-1];
    let restStatues = 0;
    for (let i = initial; i <= final; i++) {
        if (statues.indexOf(i) === -1) restStatues++;
    }
    console.log(restStatues)
    return restStatues;
}

function makeArrayConsecutive2(statues) {
    statues.sort();
    const initial = statues[0];
    const final = statues[statues.length-1];
    const statuesLength = statues.length;
    console.log(final - initial + 1 - statuesLength)
    return final - initial + 1 - statuesLength;
}

makeArrayConsecutive([6,2,3,8,11]);
// makeArrayConsecutive2([0,2]);
module.exports = makeArrayConsecutive;
