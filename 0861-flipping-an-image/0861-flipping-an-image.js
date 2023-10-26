var flipAndInvertImage = function(image) {
    const n = image.length; // Get the size of the image (n x n).

    for (let i = 0; i < n; i++) {
        // Reverse the current row using the reverse method.
        image[i].reverse();

        for (let j = 0; j < n; j++) {
            // Invert each element in the row.
            image[i][j] = 1 - image[i][j];
        }
    }

    return image;
};
