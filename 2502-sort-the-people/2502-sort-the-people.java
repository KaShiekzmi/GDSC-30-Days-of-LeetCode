import java.util.Arrays;

class Person implements Comparable<Person> {
    String name;
    int height;

    public Person(String name, int height) {
        this.name = name;
        this.height = height;
    }

    @Override
    public int compareTo(Person other) {
        // Sort in descending order of height
        return Integer.compare(other.height, this.height);
    }
}

public class Solution {
    public String[] sortPeople(String[] names, int[] heights) {
        int n = names.length;
        Person[] people = new Person[n];

        // Create Person objects
        for (int i = 0; i < n; i++) {
            people[i] = new Person(names[i], heights[i]);
        }

        // Sort the array of Person objects
        Arrays.sort(people);

        // Extract the sorted names
        String[] sortedNames = new String[n];
        for (int i = 0; i < n; i++) {
            sortedNames[i] = people[i].name;
        }

        return sortedNames;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] names = {"Mary", "John", "Emma"};
        int[] heights = {180, 165, 170};
        String[] result = solution.sortPeople(names, heights);

        // Print the sorted names
        for (String name : result) {
            System.out.println(name);
        }
    }
}
