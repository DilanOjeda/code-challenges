/**
 *   * Code Challenge - 07
 *   * CodeSignal - 08
 *  ^ After becoming famous, the CodeBots decided to move into a new building together. 
 *  ^ Each of the rooms has a different cost, and some of them are free, but there's a rumour 
 *  ^ that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse 
 *  ^ to stay in any of the free rooms, or any of the rooms below any of the free rooms.
 * 
 *  ^ Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, 
 *  ^ your task is to return the total sum of all rooms that are suitable for the CodeBots 
 *  ^ (ie: add up all the values that don't appear below a 0).
 * 
 *  ^ Example: 
 *      For
 *       matrix = [[0, 1, 1, 2], 
 *                 [0, 5, 0, 0], 
 *                 [2, 0, 3, 3]]
*/




const matrixElementsSum = (matrix) => {
    let addUp = 0;  //Sumar
    let hauntedRoom = {};
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0 && !hauntedRoom[j]) {
                hauntedRoom[j] = j;
                console.log(`[${i}, ${j}]`, 'j => ', j);
            } else {
                if (!hauntedRoom.hasOwnProperty(j)) {
                    console.log(`[${i}, ${j}]`, matrix[i][j])
                    addUp = addUp + matrix[i][j];
                }
            }
        }
    }
    console.log(hauntedRoom);
    return addUp;
} 

const matrixElementsSum2 = (matrix) => {
    let addUp = 0;
    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(`[${row}, ${col}] =>`, matrix[row][col]);
            if ((matrix[row][col]) === 0) break;
            addUp += matrix[row][col];
        }
    }
    return addUp;
} 


// let matrix = [[0, 1, 1, 2], 
//             [0, 5, 0, 0], 
//             [2, 0, 3, 3]];

// matrix = [[1, 1, 1, 0], 
//         [0, 5, 0, 1], 
//         [2, 1, 3, 10]] 
//  9
matrix = [[1,0,3], 
        [0,2,1], 
        [1,2,0]]
//  5

// matrix = [[1,1,1,0], 
//         [0,5,0,1], 
//         [2,1,3,10]]
//  9
console.log('matrixElementsSum', matrixElementsSum2(matrix));
// console.log(matrix[2].length);
module.exports =  matrixElementsSum;