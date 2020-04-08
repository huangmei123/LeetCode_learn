//分隔链表
// 1. 先得到整个链表的长度 total_len
// 2. Part_len = total_len /k   |  10/3=3 得到每一个部分的长度
// R =total_len % k          |  10%3 =1 得到最长部分的长度
// part_len =[4 , 3 , 3 ] 所以第一部分长度为4，其余为3
// 使用两个指针 head（当前位置） 和 prev （当前指针的前一个）
var splitListToParts = function(root, k) {
  let ans = new ListNode[k];
  var len = 0;
  for(let head = root; head !=null; head = head.next)++len;
  var l = len/k;
  var r = len%k;
  let head = root;
  let prev = null;
  for ( let i = 0; i<k; ++i,--r){
      ans[i]=head;
      let part_len = l +((r>0)? 1:0);
      for( let j =0;j<part_len;++j){
          prev = head;
          head = head.next;
      }
      if(prev != null) prev.next=null;
    }
    return ans;

};

// class Solution {
//     public ListNode[] splitListToParts(ListNode root, int k) {
//   ListNode[] ans = new ListNode[k];
//   int len = 0;
//   for(ListNode head = root; head !=null; head = head.next) ++len;
//   int l = len/k;
//   int r = len%k;
//   ListNode head = root;
//   ListNode prev = null;
//   for ( int i = 0; i<k; ++i,--r){
//       ans[i]=head;
//       int part_len = l +((r>0)? 1:0);
//       for( int j =0;j<part_len;++j){
//           prev = head;
//           head = head.next;
//       }
//       if(prev != null) prev.next=null;
//     }
//     return ans;
//     }
// }