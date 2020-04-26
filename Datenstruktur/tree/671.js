//二叉树中的第二小的节点
var findSecondMinimumValue = function(root) {
    if (root == null) return -1;
    if (root.left == null && root.right == null) return -1;
    let leftVal = root.left.val;
    let rightVal = root.right.val;
    if (leftVal == root.val) leftVal = findSecondMinimumValue(root.left);
    if (rightVal == root.val) rightVal = findSecondMinimumValue(root.right);
    if (leftVal != -1 && rightVal != -1) return Math.min(leftVal, rightVal);
    if (leftVal != -1) return leftVal;
    return rightVal;
};