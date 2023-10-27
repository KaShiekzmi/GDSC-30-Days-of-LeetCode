var sumOfUnique = function(nums) {
    var count = {};
    for (var i = 0; i < nums.length; i++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1;
        } else {
            count[nums[i]]++;
        }
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (count[nums[i]] === 1) {
            sum += nums[i];
        }
    }
    return sum;
};