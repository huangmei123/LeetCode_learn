//检查是否包含子树
var isSubtree = function(s, t) {
  if(s ==null){
      return false
  }
  if(sameTree(s,t)){
      return true;
  }
  return isSubtree(s.left,t) ||isSubtree(s.right,t);
};
var sameTree=function(s,t){
    if(s==null && t==null){
        return true;
    }
    if(s==null || t==null){
        return false;
    }
    return s.val=t.val && sameTree(s.left,t.left) && sameTree(s.right,t.right);
}

var isSubtree = function(s, t) {
    if(s==null)return false;
    return sameTree(s,t) ||isSubtree(s.left,t) || isSubtree(s.right,t)
};
var sameTree =function(s,t){
    if(s==null && t==null) return true;
    if(s==null || t==null) return false;
    if(t.val !=s.val) return false;
    return sameTree(s.left,t.left) &&sameTree(s.right,t.right);
}