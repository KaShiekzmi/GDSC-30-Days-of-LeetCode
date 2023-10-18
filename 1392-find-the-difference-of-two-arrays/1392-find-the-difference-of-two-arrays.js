/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const result = [[], []];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    for (const num of nums1) {
        if (!set2.has(num)) {
            result[0].push(num);
            set2.add(num); // To avoid duplicates in the second result array
        }
    }

    for (const num of nums2) {
        if (!set1.has(num)) {
            result[1].push(num);
            set1.add(num); // To avoid duplicates in the first result array
        }
    }

    return result;
};