//翻转二叉树
var invertTree = function(root) {
    if (root == null) return null;
    let left = root.left;  // 后面的操作会改变 left 指针，因此先保存下来
    root.left = invertTree(root.right);
    root.right = invertTree(left);
    return root;
};