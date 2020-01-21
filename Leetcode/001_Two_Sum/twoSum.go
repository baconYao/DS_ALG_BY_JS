// Step1. 先將array做hash
//  * hash.key = element
//  * hash.value = index
// Step2. 將 (target - iterate element) 後，去hash table取值，若有則中獎。

func twoSum(nums []int, target int) []int {
	// nums {slice of int}: 無序的數字陣列
	// target {int}: 目標數字
	// return 
	// 	- {slice of int}: 兩個數字的陣列位址，其數字總合為 target
	//  - {nil}: 若無符合的數組，回傳nil

	hashMap := make(map[int]int)
    
    for index, value := range nums {
        if v, ok := hashMap[value]; ok {
            return []int{v, index}
        }
        hashMap[target - value] = index
    }

    return nil
}