//找出树的高度
var maxDepth = function(root) {
    if (root == null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
var maxDepth = function(root) {
    if (root == null) return 0;
    let right= maxDepth(root,right);
    let left= maxDepth(root,left);
    return Math.maxDepth(left,right) +1;
};