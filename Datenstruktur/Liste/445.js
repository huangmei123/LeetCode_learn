// 两数之和 2
//第一步：先将位数补齐，让其一一对应
// 7->2->4->3
// 0->5->6->4
//第二步递归计算两个链表的同位之和 同时使用digitCarry表示进位的情况
var addTwoNumbers = function (l1,l2){
    let countl1=0,countl2=0;
    let l1List=l1;
    let l2List=l2;
    while(l1List){
        countl1++;
        l1List = l1List.next;
    }
    while(l2List){
        countl2++;
        l2List = l2List.next;
    }

    let tmpList =new ListNode(0);
    let cur =tmpList;
    // Math.abs(x) 函数返回指定数字 “x“ 的绝对值
    let diff = Math.abs(countl2 - countl1)
//位数补全
    while(diff --){
        cur.next = new ListNode(0);
        cur = cur.next;
         
    }
//判断l1和l2的长度 并补全
    if(countl1 < countl2){
        cur.next=l1;
        l1 = tmpList.next;
    }else if(countl2 <countl1){
        cur.next = l2;
        l2 =tmpList.next;
    }
    // digitCarry表示进位的情况
    let digitCarry = 0;
    function listNodeAdd(l1,l2){
        if (l1 ===null) return;
        listNodeAdd(l1.next,l2.next)
        let sum = l1.val +l2.val +digitCarry
        if(sum>= 10){
            l1.val =sum % 10;
            digitCarry = 1;
        }else{
            l1.val = sum;
            digitCarry = 0
        }
    }
    listNodeAdd(l1,l2)
    let result = l1;
    if(digitCarry === 1){
        result = new ListNode(1);
        result.next = l1;
    }
    return result;
}