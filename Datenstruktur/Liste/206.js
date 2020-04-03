// 反转链表
//递归
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    var next = head.next;  //需要一个指针保存head的翻转的值
    var newHead = reverseList(next);
    next.next = head;
    head.next = null;
    return newHead;
};
//头插法
var reverseList = function(head) {
    var newHead = new ListNode(-1);
    while (head != null) {
        var next = head.next;//需要一个指针保存head的翻转的值
        head.next = newHead.next;
        newHead.next = head;
        head = next;
    }
    return newHead.next;
};
