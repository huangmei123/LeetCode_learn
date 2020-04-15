//最小深度
//递归的写法
var minDepth = function(root) {
  if(root ==null) return 0;
  if(root.left ==null ) return minDepth(root.right) +1;
  if(root.right ==null ) return minDepth(root.left) +1;
  return Math.min(minDepth(root.right) ,minDepth(root.left)) +1;
};


var minDepth = function(root) {
    if (root == null) return 0;
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    if (left == 0 || right == 0) return left + right + 1;
    return Math.min(left, right) + 1;
}