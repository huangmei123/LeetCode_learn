//只出现一次的值
//异或
//如果a、b两个值不相同，则异或结果为1。如果a、b两个值相同，异或结果为0
var singleNumber = function(nums) {
    var res =0;
    for(var i=0;i<nums.length;i++){
        res ^=nums[i];
    }
    return res;
   };