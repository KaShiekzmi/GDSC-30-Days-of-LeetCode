/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

var gcdOfStrings = function(str1, str2) {
   if (str1 + str2 !== str2 + str1) {
        return ""; // If the strings can't be combined in both orders to be equal, return an empty string
    }
    
    const len1 = str1.length;
    const len2 = str2.length;
    const divisorLength = gcd(len1, len2);
    
    return str1.substring(0, divisorLength);  
};