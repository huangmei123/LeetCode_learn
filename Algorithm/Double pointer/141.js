
var hasCycle = function(head) {   
  let first =head;
  let second=head;
  while(first &&first.next){
      first=first.next.next;
      second=second.next;
      if(first === second) return true;
  }
  return false;
};
console.log(hasCycle ([3,2,0,-4]));