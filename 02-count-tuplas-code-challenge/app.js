





const countTuplas = (numbers, sum) => {
    let addition = 0;
    let counter = 0;
    for (let i = 0; i < numbers.length-1; i++) {
        addition = numbers[i] + numbers[i+1];
        // console.log(`${numbers[i]} + ${numbers[i+1]} = ${addition} i[${i}] ${addition===sum? 'ok': ''}`);
        if (addition == sum) {
            counter++;
        }
    }
    return counter;
}

function countThree(numbers, sum) {
    let addition = 0;
    let counter = 0;
    for (let i = 1; i < numbers.length-1; i++) {
        addition = numbers[i-1] + numbers[i] + numbers[i+1];
        // console.log(`${numbers[i-1]} + ${numbers[i]} + ${numbers[i+1]} = ${addition} i[${i}] ${addition===sum? 'ok': ''}`);
        if (addition === sum) {
            counter++;
        }            
    }
    return counter;
}
const numbers = [2, 9, 7, 2, 7, 4, 2, 2, 3, 9, 0, 3, 1, 6, 9, 6, 0, 7, 0, 9, 9, 8, 9, 5, 6, 7, 9, 4, 3, 7];


console.log('Tupla =>', countTuplas(numbers, 10));
console.log('Triple => ', countThree(numbers, 3));