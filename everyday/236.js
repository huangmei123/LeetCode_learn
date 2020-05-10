/*
这到题相当于查找以root为根节点的树上是否有p节点或者q节点
有 返回p/q节点
无 返回null
*/
var lowestCommonAncestor = function(root, p, q) {
  if(root==null ||root==p || root==q) {
      return root;
  }
  let left =lowestCommonAncestor(root.left,p,q);
  let right = lowestCommonAncestor(root.right,p,q);
  if(left!=null && right!=null){
      return root;
  }
  return left!=null?left:right;
}