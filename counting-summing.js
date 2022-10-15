function countAndSumming(array){
    let count = 0;
    let sum = 0;
    for(let el of array){
        if(el >= 0){
            count++;
        }else{
            sum += el;
        }
    }
    return [count, sum];
}


console.log(countAndSumming([1, 2, 3, 4, 5, -1, -2, -3]));
console.log(countAndSumming([3, 6, -1, 7, -7]));
console.log(countAndSumming([-2, -1, 1, 2, 3, -6]));