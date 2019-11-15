package main

import (
    "fmt"
)

func selectionSort(arr []int) []int{
    for i:= 0; i < len(arr); i++ {
        lowest := i
        for j:= i + 1; j < len(arr); j++ {
            if arr[j] < arr[lowest] {
                lowest = j
            }
        }
        if lowest != i {
            temp:= arr[lowest]
            arr[lowest] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

func main() {
    fmt.Println(selectionSort([]int{95,24,53,46,53,66,72,1,95,34,-472,9,105,-2}))
}
