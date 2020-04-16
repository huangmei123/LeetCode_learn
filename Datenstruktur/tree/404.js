//左子树之和
var sumOfLeftLeaves = function(root) {
  if(root==null) return 0;
  if(isLeft(root.left)) return root.left.val +sumOfLeftLeaves(root.right);
  return sumOfLeftLeaves(root.left) +sumOfLeftLeaves(root.right);
};
var isLeft =function(root){
    if(root ==null) return false;
    return root.left == null && root.right ==null;
}