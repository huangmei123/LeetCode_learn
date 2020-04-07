// 回文链表
// 空间复杂度位O（n）
var isPalindrome = function(head) {
  let arr =[],cur = head;
  while(cur !== null){
     arr.push(cur.val);
     cur = cur.next;
  }
    //  for(let i = 0,j=arr.length-1;i<j;i++,j--){
    //      if(arr[i] !==arr[j]) return false;
    //  }
     while(head !==null){
         if(head.val!== arr[arr.length -1]) return false;
         arr.pop();
         head = head.next;
     }
  return true;
};

// 2.快慢指针找到中间结点
// 快指针的速度是慢指针的2倍，当快指针到达终点的时候 慢指针刚好到中间位置 再
// 将后面部分进行反转，对比值是否相等。空间复杂度位O（1）
var isPalindrome = function(head) {
    //定义快慢指针的速度
    let slow=head;
    let fast = head;
    while(fast.next !==null && fast.next.next !== null){
        fast=fast.next.next;
        slow=slow.next;
    }
    //对比值是否相等
    let rev =reverse(slow.next);
    while(rev !== null){
        if(head.varl !==rev.val) return false;
        rev =rev.next;
        head=head.next
    }
    return true;
};
//采用递归的方式 反转链表
function reverse(head){
    if(head ===null ||head.next ===null) return head;
    let rev = reverse(head.next);
    head.next.next=head;
    head.next =null;
    return rev;
}