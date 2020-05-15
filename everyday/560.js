//和为l的子数组
//给定一个整数数组和一个整数k，你需要找到该数组中和为k的连续的子数组的个数。
/*
输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
*/
var subarraySum = function(nums, k) {
    let count = 0;
    for(let start =0;start<nums.length;++start){
        let sum = 0;
        for(let end= start;end>=0;--end){
            sum +=nums[end];
            if(sum ==k){
                count++;
            }
        }
    }
    return count;
};