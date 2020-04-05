var deleteDuplicates = function(head) {
  let cur=head;
  while(cur!==null &&cur.next!==null){
      if(cur.val ===cur.next.val){
          let delNode=cur.next;
          cur.next=delNode.next;
          delNode.next=null;
          //cur.next=cur.next.next-->这句话相当于cur.next给删除了
      }else{
          cur=cur.next;
      }
  }
  return head;
};