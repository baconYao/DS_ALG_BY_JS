package main

import (
	"fmt"
)

func bubbleSort(array []int) []int {
	for i := len(array) - 1; i > 0; i-- {
		noSwap := true
		for j := 0; j <= i-1; j++ {
			if array[j] > array[j+1] {
				temp := array[j]
				array[j] = array[j+1]
				array[j+1] = temp
				noSwap = false
			}
		}
		if noSwap {
			return array
		}
	}

	return array
}

func main() {
	fmt.Println(bubbleSort([]int{95,24,53,46,11,24,72,95}))
	fmt.Println(bubbleSort([]int{5,1,2,3,4}))
}