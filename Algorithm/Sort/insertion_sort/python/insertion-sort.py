def insertion_sort(arr):
    for i in range(1, len(arr)):
        # current value
        cv = arr[i]
        j = None
        for j in range(i-1, -1, -1):
            if arr[j] <= cv:
                j = j + 1
                break
            arr[j+1] = arr[j]
        arr[j] = cv
    return arr

print(insertion_sort([95,24,53,46,11,24,72,95]))