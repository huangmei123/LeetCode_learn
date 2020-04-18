//国旗问题 对颜色进行排序
var sortColors = function(nums) {
  let zero =-1,one=0,two=nums.length;
  while(one<two){
      if(nums[one] ==0){
          swap(nums,++zero,one++);
      }else if(nums[one] ==2){
          swap(nums,--two,one);
      }else{
          ++one;
      }
  }
};
var swap=function(nums,i,j){
    let t=nums[i];
    nums[i] = nums[j];
    nums[j] =t;
}