class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int count = 0;
    int size = flowerbed.size();
    int i = 0;
    
    while (i < size) {
        if (flowerbed[i] == 0) {
            // Check if the current plot is empty and the previous and next plots are also empty.
            bool prevEmpty = (i == 0) || (flowerbed[i - 1] == 0);
            bool nextEmpty = (i == size - 1) || (flowerbed[i + 1] == 0);
            
            if (prevEmpty && nextEmpty) {
                flowerbed[i] = 1; // Plant a flower in the current plot
                count++;
            }
        }
        
        if (count >= n) {
            return true;
        }
        
        i++;
    }
    
    return count >= n;
    }
};