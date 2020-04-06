//两两相交 
//迭代的方式
var swapPairs = function(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = head;
  let pre =head;
  while( cur != null && cur.next!=null){
      let cnext = cur.next;
      cur.next = cnext.next;
      cnext.next =cur;
      pre.next = cnext;
      pre = cur;
      cur = cur.next;
  }
  return dummy.next;
};

var swapPairs = function(head) {
    let node = new ListNode(-1);
    node.next = head;
    let pre = node;
    while (pre.next != null && pre.next.next != null) {
        let l1 = pre.next, l2 = pre.next.next;
        let next = l2.next;
        l1.next = next;
        l2.next = l1;
        pre.next = l2;

        pre = l1;
    }
    return node.next;
}
