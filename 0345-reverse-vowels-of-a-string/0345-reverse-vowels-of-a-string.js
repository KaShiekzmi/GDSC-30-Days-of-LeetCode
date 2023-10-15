/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // Convert the string to an array of characters
    s = s.split('');
    
    // Create a set of vowels for easy lookup
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    // Initialize left and right pointers
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Move the left pointer to the right until a vowel is found
        while (left < right && !vowels.has(s[left])) {
            left++;
        }
        
        // Move the right pointer to the left until a vowel is found
        while (left < right && !vowels.has(s[right])) {
            right--;
        }
        
        // Swap the vowels found at the left and right pointers
        if (left < right) {
            const temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            
            // Move the pointers towards each other
            left++;
            right--;
        }
    }
    
    // Convert the array of characters back to a string
    return s.join('');
};
