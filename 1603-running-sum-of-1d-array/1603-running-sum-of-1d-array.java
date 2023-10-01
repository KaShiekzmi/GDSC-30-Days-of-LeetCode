class Solution {
    public int[] runningSum(int[] nums) {
        int n = nums.length;
    int[] runningSum = new int[n]; // Initialize a new array with the same length
    
    int currentSum = 0; // Initialize a variable to keep track of the running sum
    
    for (int i = 0; i < n; i++) {
        currentSum += nums[i]; // Add the current element to the running sum
        runningSum[i] = currentSum; // Set the runningSum at index i
    }
    
    return runningSum;
    }
}