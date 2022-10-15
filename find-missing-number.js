function findMissingNumber(nums){
    let containNumber;

    for(let number = 0; number <= nums.length; number++){
        containNumber = 0;
        for(let num of nums){
            if(num === number) containNumber++;
        }
        if(containNumber === 0) return number;
    }
}

console.log(findMissingNumber([0, 1, 2, 4, 5, 6, 7, 8, 9, 10]));