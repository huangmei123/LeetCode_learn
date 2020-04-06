var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  //题目关键 slow和fast相距n+1个位置 且fast移动到null位置
 
  for( let i=1;i<=n+1;i++){
    fast=fast.next;
  }
  while(fast != null){
    slow=slow.next;
    fast=fast.next;
  }
  //当fast移动到null时 
  slow.next =slow.next.next;
  return dummy.next;
};
