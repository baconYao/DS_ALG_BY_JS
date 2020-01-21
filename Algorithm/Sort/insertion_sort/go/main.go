package main

import "fmt"

func insertionSort(arr []int) []int {
	for i := 1; i < len(arr); i++ {
		cv := arr[i]
		var t int
		for j := i - 1; j >= 0; j-- {
			if arr[j] <= cv {
				t = j + 1
				break
			}
			arr[j+1] = arr[j]
			t = j
		}
		arr[t] = cv
	}
	return arr
}

func main() {
	fmt.Println(insertionSort([]int{95, 24, 53, 46, 11, 24, 72, 95}))
	fmt.Println(insertionSort([]int{1, 3, 4, 2}))
}
