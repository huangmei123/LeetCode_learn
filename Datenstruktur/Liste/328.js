//奇偶链表
var oddEvenList = function(head) {
    if (head == null) {
        return head;
    }
    // 第一步 head、odd分别为奇链表的头尾结点，
    //evenHead，even分别为偶链表的头尾结点
    let odd = head, even = head.next, evenHead = even;
    while (even != null && even.next != null) {
        odd.next = odd.next.next;
        odd = odd.next;
        //此时odd指向了3
        even.next = even.next.next;
        even = even.next;
        //此时even指向了4
    }
    odd.next = evenHead;
    //将奇偶链表链接起来
    return head;
}