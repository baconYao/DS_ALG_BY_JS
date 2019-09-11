package main

import (
	"fmt"
	"math"
)

func binarySearch(sortedArray []int, value int) int {
	lp := 0
	rp := len(sortedArray) - 1
	mp := int(math.Floor(float64(rp / 2)))

	for sortedArray[mp] != value && lp <= rp {
		if sortedArray[mp] < value {
			lp = mp + 1
		} else {
			rp = mp - 1
		}
		mp = int(math.Floor(float64((rp + lp) / 2)))
	}

	if sortedArray[mp] == value {
		return mp
	}
	return -1
}

func main() {
	s := []int{1,3,5,7,9,11,13,15}
	a := binarySearch(s, 15)	// 7
	fmt.Println(a)
}