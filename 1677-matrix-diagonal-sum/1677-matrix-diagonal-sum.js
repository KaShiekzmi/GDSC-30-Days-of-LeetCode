function diagonalSum(mat) {
  const n = mat.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i]; // Add elements from the primary diagonal
    sum += mat[i][n - i - 1]; // Add elements from the secondary diagonal
  }

  // Subtract the duplicate element (center element) if the matrix size is odd
  if (n % 2 === 1) {
    const centerIndex = Math.floor(n / 2);
    sum -= mat[centerIndex][centerIndex];
  }

  return sum;
}

// Example 1
const mat1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(diagonalSum(mat1)); // Output: 25

// Example 2
const mat2 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];
console.log(diagonalSum(mat2)); // Output: 8

// Example 3
const mat3 = [[5]];
console.log(diagonalSum(mat3)); // Output: 5
