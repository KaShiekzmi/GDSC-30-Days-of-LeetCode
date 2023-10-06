function countOdds(low, high) {
  let count = 0;

  // Make sure low is odd, if not, increment it to the next odd number
  if (low % 2 === 0) {
    low++;
  }

  // Count the odd numbers in the range
  for (let i = low; i <= high; i += 2) {
    count++;
  }

  return count;
}

// Example usage:
const low1 = 3;
const high1 = 7;
console.log(countOdds(low1, high1)); // Output: 3

const low2 = 8;
const high2 = 10;
console.log(countOdds(low2, high2)); // Output: 1
