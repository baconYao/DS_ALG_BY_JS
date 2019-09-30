# Naive String Search

* Naive string search help ypu to find out how many count of your target string (substring) match the string.
* For example:
    ```
    string: wowomgzomg
    substring: omg
    return 2

    because we find the substring shows two times in the string.
    ```

# How to implement

## Divide and Conquer

* Loop over the longer string
* Loop over the shorter string
* If the characters don't match, break out the inner loop
* If the characters do match, keep going
* If you complete the inner loop and find a match, increment the count of matches
* Return the count
