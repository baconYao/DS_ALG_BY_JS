package main

import (
	"fmt"
)

func naiveSearch(long string, short string) int {
	count := 0
	sl := len(short)

	for i := range long {
		for j := range short {
			if short[j] != long[i+j] {
				break				
			}
			if j == sl - 1 {
				count++
			}
		}
	}

	return count
}

func main() {
	fmt.Println(naiveSearch("lorie loled", "lol"))
	fmt.Println(naiveSearch("lorie loled", "lo"))
}