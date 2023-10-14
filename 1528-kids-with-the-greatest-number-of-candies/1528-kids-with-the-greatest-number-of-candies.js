/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies); // Find the maximum number of candies in the array

    // Check if each kid can have the greatest number of candies with the extra candies
    return candies.map(kidCandies => kidCandies + extraCandies >= maxCandies);
};