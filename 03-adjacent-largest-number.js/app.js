
/**
 *   * Code Challenge - 03
 *  ^ Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
 * 
 *  ^ Example: 
 *      For inputArray = [3, 6, -2, -5, 7, 3], the output should be
 *      adjacentElementsProduct(inputArray) = 21.
 *  
 *      7 and 3 produce the largest product.
*/


function adjacentElementsProduct(inputArray) {
    let largestProduct = inputArray[0] * inputArray[1];
    let multiplication = 0;
    for(let i=0; i < inputArray.length-1; i++) {
        multiplication = inputArray[i] * inputArray[i+1];
        if(multiplication > largestProduct) largestProduct = multiplication;
    }
    return largestProduct;
}


module.exports = adjacentElementsProduct;