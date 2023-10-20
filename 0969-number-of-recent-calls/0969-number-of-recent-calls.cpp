#include <queue>

class RecentCounter {
public:
    RecentCounter() {
        
    }
    
    int ping(int t) {
        // Add the current request time to the queue.
        requests.push(t);
        
        // Remove requests that are outside the 3000ms window.
        while (requests.front() < t - 3000) {
            requests.pop();
        }
        
        // The size of the queue now represents the number of requests within the time frame.
        return requests.size();
    }

private:
    std::queue<int> requests;
};
