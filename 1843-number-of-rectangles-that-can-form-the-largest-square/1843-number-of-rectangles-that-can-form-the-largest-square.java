class Solution {
    public int countGoodRectangles(int[][] rectangles) {
        int maxLen = 0;
        int count = 0;
        
        for (int[] rectangle : rectangles) {
            int minSide = Math.min(rectangle[0], rectangle[1]);
            if (minSide > maxLen) {
                maxLen = minSide;
                count = 1;
            } else if (minSide == maxLen) {
                count++;
            }
        }
        
        return count;
    }
}
