
/**
 *   * Code Challenge - 04
 *  ^ Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
 *  ^ Example: 
 *      For n = 2, the output should be
 *      shapeArea(n) = 5;
 *      For n = 3, the output should be
 *      shapeArea(n) = 13.
*/


function shapeAreaPolygon(n) {
    return Math.pow(n-1, 2) + Math.pow(n, 2);
}

module.exports = shapeAreaPolygon;