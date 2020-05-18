//一个整数数组 找出乘积最大的连续子数组 并返回对应的乘积
//[2,3,-2,4]---> 2*3=6
//遍历数组中的每一个数 每一个做一个抉择是和上一个还是和下一个进行操作。
//涉及到一个负负得正
//建立动态规划 保留最大值和最小值的存储
var maxProduct = function(nums) {
  const maxProductMemo=[];
  const minProductMemo=[];
  maxProductMemo[0]=nums[0];
  minProductMemo[0]=nums[0];

  let max = nums[0];
  for(let i = 1; i<nums.length;i++){
      maxProductMemo[i]=Math.max(nums[i],nums[i]*maxProductMemo)[i-1],nums[i]*minProductMemo[i-1]
      minProductMemo[i]=Math.min(nums[i],nums[i]*maxProductMemo)[i-1],nums[i]*minProductMemo[i-1]
      max=Math.max(max,maxProductMemo[i-1]);

  }
  return max;
};
var maxProduct = function (nums) {
    if (!nums.length) return null
    let [max, curMax, curMin] = [nums[0], nums[0], nums[0]]

    for (let i = 1; i < nums.length; i++) {
        [curMax, curMin] = [curMax * nums[i], curMin * nums[i]];
        [curMax, curMin] = [Math.max(curMax, curMin, nums[i]), Math.min(curMax, curMin, nums[i])];
        if (max < curMax) max = curMax;
    };
    return max
}

