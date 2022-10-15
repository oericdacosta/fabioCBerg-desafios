function divideIntoOdd(num){
    if(num % 2 !== 0) return [num];
    if((num / 2) % 2 !== 0) return [num / 2, num / 2];
    let oddNumberOne = num / 2 - 1;
    let oddNumberTwo = num / 2 + 1;
    return [oddNumberOne, oddNumberTwo];

}

console.log(divideIntoOdd(8));
console.log(divideIntoOdd(10));
console.log(divideIntoOdd(7));