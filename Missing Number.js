var missingNumber = function(nums) {

    let n=nums.length 
    let i =0 
    while (i<n+1){
        console.log(i)
        if (nums.indexOf(i)==-1){
            return i 
        }

        i=i+1
    }
    
};
