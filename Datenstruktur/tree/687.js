// 最长同值路径
// 要考虑特殊情况，在回路时是能返回一次
//     1
//   4  5
// 4  4  5
var longestUnivaluePath = function(root) {
  if(root==null) return 0;
  this.ans = 0;
  valuePath(root);
  return this.ans;
}
var valuePath =function(root){
    if(root==null) return 0;
    let l =valuePath(root.left);
    let r =valuePath(root.right);
    let pl = 0;
    let pr = 0;
    if(root.left!=null && root.val==root.left.val) pl =l +1;
    if(root.right!=null && root.val==root.right.val) pr =r +1;
    this.ans =Math.max(this.ans,pl+pr);
    return Math.max(pl,pr);
}