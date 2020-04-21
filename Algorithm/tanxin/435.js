/*无重叠区间
先计算最多能组成的不重叠区间个数，然后用区间总个数减去不重叠区间的个数。
在每次选择中，区间的结尾最为重要，选择的区间结尾越小，
留给后面的区间的空间越大，那么后面能够选择的区间个数也就越大。
按区间的结尾进行排序，每次选择结尾最小，并且和前一个区间不重叠的区间。
*/
var eraseOverlapIntervals = function(intervals) {
  const len = intervals.length
  if(len < 2){
      return 0
  }
  intervals.sort((a,b) =>sort(a,b))
  let count = 1;
  let prev = 0;
  for(let i=0 ; i<len; i++){
      if(intervals[i][0] >= intervals[prev][1]){
          count ++;
          prev = i;
      }
  }
  return len-count;
};
function sort(a,b){
    if(a != b){
        return a[1] -b[1]
    }
    return a[0] = b[0]
}