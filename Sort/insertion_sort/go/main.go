package main

import (
	"fmt"
)

func insertionSort(arr []int) []int {
	fmt.Println(arr)
	for i := 1; i < len(arr); i++ {
		cv := arr[i]
		// fmt.Println("=====")
		// fmt.Println(cv)
		t := i - 1
		for j := i - 1; j >= 0; j-- {
			if arr[j] <= cv {
				t = j
				fmt.Println("bre")
				fmt.Println(t)
				break
			}
			arr[j+1] = arr[j]
		}
		arr[t+1] = cv
		fmt.Println(arr)
	}
	// fmt.Println(arr)
	return arr
}

// Wrong. Need to fix it
func main() {
	// insertionSort([]int{95, 24, 53, 46, 11, 24, 72, 95})
	insertionSort([]int{1, 3, 4, 2})
}
