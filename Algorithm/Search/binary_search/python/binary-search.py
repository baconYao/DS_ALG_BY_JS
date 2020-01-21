import math

def binary_search(sorted_array, value):
    """
        Args:
            sorted_array {array}: an array which was sorted
            value : a value to be searched
        Return:
            if found: return the index of target element
            else: return -1
    """
    lp = 0
    rp = len(sorted_array) - 1
    mp = math.floor(rp / 2)

    # print(lp, rp, mp)
    while sorted_array[mp] != value and lp <= rp:
        if sorted_array[mp] < value:
            lp = mp + 1
        else:
            rp = mp - 1
        mp = math.floor((lp + rp) / 2)
    
    return mp if sorted_array[mp] == value else -1
        

print(binary_search([1,2,3,5,7,9,11,13,14,15,20,26,27,28,29,30,31,35,37,38,39,40], 23))    # -1
print(binary_search([1,2,3,5,7,9,11,13,14,15,20,26,27,28,29,30,31,35,37,38,39,40], 11))    # 6
print(binary_search([1,3,5,7,9,11,13,15], 15))     # 7
print(binary_search([1,3,5,7,9,11,13,15], 1))      # 0
print(binary_search([1,3,5,7,9,11,13,15], 2))      # -1
print(binary_search([1,3,5,7,9,11,13,15], 20))     # -1