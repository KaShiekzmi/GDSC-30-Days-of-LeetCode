class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        HashMap<Integer, Integer> countMap = new HashMap<>();

        // Count the occurrences of each value in the array
        for (int num : arr) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }

        // Create a HashSet to store unique counts
        HashSet<Integer> uniqueCounts = new HashSet<>();

        // Check if the counts are unique
        for (int count : countMap.values()) {
            if (uniqueCounts.contains(count)) {
                return false; // Not unique
            }
            uniqueCounts.add(count);
        }

        return true; // All counts are unique
    
    }
}