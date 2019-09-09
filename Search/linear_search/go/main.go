package main

import (
	"fmt"
)

func linearSearch(val string, arr []string) int{
	for index, value := range arr {
		if val == value {
			return index
		}
	}
	return -1
}

func linearSearch2(val string, arr ...string) int{
	for index, value := range arr {
		if val == value {
			return index
		}
	}
	return -1
}

func main() {
	a1 := []string{"A","b","C"}
	fmt.Println(linearSearch2("s", a1...))
	fmt.Println(linearSearch("K", []string{"A","b","K","C"}))
}