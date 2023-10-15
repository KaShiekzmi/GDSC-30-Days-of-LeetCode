var moveZeroes = function(nums) {
    let nonZeroPointer = 0; // Points to the position where the next non-zero element should be placed

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // If the current element is non-zero, move it to the nonZeroPointer position
            nums[nonZeroPointer] = nums[i];
            // If there's a difference in the positions, set the current position to 0
            if (nonZeroPointer !== i) {
                nums[i] = 0;
            }
            nonZeroPointer++;
        }
    }
};