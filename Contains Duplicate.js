//Contains Duplicate

var containsDuplicate = function(nums) {
    
    let testObj = {};
    for (var i = 0; i < nums.length; i++) {
        let aNum = nums[i];
        if (testObj[aNum]) {
            return true;
    }       else {
            testObj[aNum] = true;
    }
  }

  return false;
};