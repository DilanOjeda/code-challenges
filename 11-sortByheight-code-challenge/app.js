
/**
 *   * Code Challenge - 11
 *   * CodeSignal - 12
 *  ^ Some people are standing in a row in a park. There are trees between them which cannot be moved. 
 *  ^ Your task is to rearrange the people by their heights in a non-descending order without moving the trees. 
 *  ^ People can be very tall!
 * 
 *  ^ Example: 
 *      For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
 *      solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/


const sortByheight = (a) => {
    let people = a.filter(p => p !== -1);
    people = people.sort((a,b) => a - b);
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            a[i] = people[counter];
            counter++;
        }             
    }
    return a; 
}
const array = [-1, 150, 190, 170, -1, -1, 160, 180];
const result = sortByheight(array);

console.log('[', result.toString(), '] array')

