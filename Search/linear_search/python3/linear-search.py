def linear_search(arr, val):
    """ Search function from start point to end.
        Args:
            array {array}: data set
            value {string}: a character to be searched
        Return:
            if found: return the index of target element
            else: return -1
    """
    if arr is None or len(arr) < 1 or val is None:
        return -1
    
    for i in range(len(arr)):
        if arr[i] == val:
            return i
    return -1


print(linear_search(["A","b","C"], "s"))
print(linear_search(["A","b","K","C"], "K"))