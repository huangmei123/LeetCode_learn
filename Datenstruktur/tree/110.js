var isBalanced = function(root) {
    // 遍历到底还没有发现高度差超过 1 的左右子树，那么这个子树肯定符合平衡二叉树的规范
    if (root==null) {
        return true
    }
    // 判断左右子树的高度差，如果超过 1 那么立即返回 false
    if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
        return false
    }
    // 分别递归左右子树
    return isBalanced(root.left) && isBalanced(root.right)
    // 获取某个子树的高度
    function getHeight (root) {
        if (!root) {
            return 0
        }
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1
    }
};
function isBalanced1(root,result){
    if(root == null){
        return 0
    }
    let l = isBalanced1(root.left,result);
    let r = isBalanced1(root.right,result);
    if(l-r>1 || l-r<-1){
        result[0] = false
    }
    return Math.max(l,r)+1;
}
var isBalanced = function(root) {
    let a = [true];
    isBalanced1(root,a);
    return a[0]
};
