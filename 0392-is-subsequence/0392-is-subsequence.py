class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        i, j = 0, 0  # Pointers to iterate through s and t

        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1
            j += 1

        # If we successfully iterated through all of s, it's a subsequence
        return i == len(s)
