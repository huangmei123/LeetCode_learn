//前序和中序遍历
//前序  根 左 右
//中序 左 根 右
//后序 左 右 根
//采用递归的思想 对于preorder 每一个元素即为一个子树的根元素
//对于inoder 查找preorder的根元素
//左边的preorder为当前元素的左子树
//右边preorder是当前根元素的右子树
var buildTree = function(preorder, inorder) {
    let build = (inorder) => {
        if(!inorder || !inorder.length) return null
        let tmp = preorder.shift(),mid = inorder.indexOf(tmp)
        let root = new TreeNode(tmp)
        root.left = build(inorder.slice(0,mid))
        root.right = build(inorder.slice(mid + 1))
        return root
    }
    return build(inorder)
};


