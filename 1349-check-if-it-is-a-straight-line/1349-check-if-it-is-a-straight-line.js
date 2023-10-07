function checkStraightLine(coordinates) {
  if (coordinates.length < 3) {
    return true; // If there are 2 or fewer points, they are always in a straight line.
  }

  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];

  // Check if all x-values are the same (vertical line).
  const isVerticalLine = coordinates.every(([x, y]) => x === x1);

  if (isVerticalLine) {
    return true;
  }

  const initialSlope = (y2 - y1) / (x2 - x1);

  for (let i = 2; i < coordinates.length; i++) {
    const [xi, yi] = coordinates[i];
    const [xPrev, yPrev] = coordinates[i - 1];

    if (xi - xPrev === 0) {
      return false; // Avoid division by zero for vertical lines.
    }

    const currentSlope = (yi - yPrev) / (xi - xPrev);

    if (currentSlope !== initialSlope) {
      return false;
    }
  }

  return true;
}

// Example usage:
const coordinates = [[0, 0], [0, 1], [0, -1]];
console.log(checkStraightLine(coordinates)); // Output: true
