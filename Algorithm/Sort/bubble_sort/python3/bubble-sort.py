def bubble_sort(arr):
    """
        Args:
            arr {array}: data set
        Return:
            a sorted array
    """
    for i in range(len(arr)-1, -1, -1):
        # print(":%d " % i)
        swap = False
        for j in range(0, i):
            # print("j: %d" % j)
            if arr[j] >= arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swap = True
                # print(arr)
        if not swap:
            return arr
    return arr

print(bubble_sort([5,1,2,3,4]))
print(bubble_sort([95,24,53,46,11,66,72,1]))