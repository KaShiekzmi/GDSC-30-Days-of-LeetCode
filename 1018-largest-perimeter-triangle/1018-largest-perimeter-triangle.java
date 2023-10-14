class Solution {
    public int largestPerimeter(int[] nums) {
        Arrays.sort(nums);
    for (int i = nums.length - 1; i >= 2; i--) {
        // Check if it's possible to form a triangle with the largest side as nums[i]
        if (nums[i - 2] + nums[i - 1] > nums[i]) {
            return nums[i - 2] + nums[i - 1] + nums[i];
        }
    }
    return 0; // No valid triangle found
    }
}