//采用排序 后指向指定位置
//排序：时间复杂度O(NlogN) 空间复杂度O(1)
// var findKthLargest = function(nums, k) {
//     Arrays.sort(nums);
//     return nums[nums.length - k];
// };

//堆 ：时间复杂度 O(NlogK)，空间复杂度 O(K)。
// var findKthLargest = function(nums, k) {
//     PriorityQueue<Integer> pq = new PriorityQueue<>(); // 小顶堆
//     for (int val : nums) {
//         pq.add(val);
//         if (pq.size() > k)  // 维护堆的大小为 K
//             pq.poll();
//     }
//     return pq.peek();
// }

//快速排序
var findKthLargest = function(nums, k) {
    let start = 0;
    let end = nums.length - 1;
    let index = partition(nums,start,end);
    while(index !== k-1) {
        if(index > k-1) {
            index = partition(nums,start,index-1)
        }
        if(index < k-1) {
            index = partition(nums,index+1,end)
        }
    }
    return nums[k-1];
};


function partition(nums,start,end) {
    let target = nums[start];
    while(start < end) {
        while(nums[end] <= target && start < end) {
            end--;
        }
        nums[start] = nums[end];
        while(nums[start] > target && start < end) {
            start++;
        }
        nums[end] = nums[start];
    }
    nums[start] = target;
    return start;// 目标位置
}