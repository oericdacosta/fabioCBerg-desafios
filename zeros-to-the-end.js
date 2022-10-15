function moveZeros(nums){
    let countZeros = 0;
    for(let number of nums){
        if(number === 0) countZeros++;
    }
    nums = nums.filter(number => number !== 0);
    for(let i = 0; i < countZeros; i++){
        nums.push(0);
    }
    return nums;
}

console.log(moveZeros([7, 2, 0, 0, 0, 13, 0, 78, 0, 0, 19]));