function signFunc(x) {
    if (x > 0) {
        return 1;
    } else if (x < 0) {
        return -1;
    } else {
        return 0;
    }
}

function arraySign(nums) {
    let product = 1;

    for (let num of nums) {
        product *= num;
    }

    return signFunc(product);
}

// Example 1
const nums1 = [-1, -2, -3, -4, 3, 2, 1];
console.log(arraySign(nums1)); // Output: 1

// Example 2
const nums2 = [1, 5, 0, 2, -3];
console.log(arraySign(nums2)); // Output: 0

// Example 3
const nums3 = [-1, 1, -1, 1, -1];
console.log(arraySign(nums3)); // Output: -1
