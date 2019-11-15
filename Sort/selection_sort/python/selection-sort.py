def selection_sort(arr):
    for i in range(len(arr)):
        lowest = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[lowest]:
                lowest = j
        if lowest != i:
            temp = arr[lowest]
            arr[lowest] = arr[i]
            arr[i] = temp
    return arr

print(selection_sort([95,24,53,46,11,66,72,1]))
print(selection_sort([95,24,53,46,53,66,72,1,95,34,-472,9,105,-2]))
print(selection_sort([5,1,2,3,4]))