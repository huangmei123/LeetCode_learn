//找到最顶层 最左边的值
var findBottomLeftValue = function(root) {
    let queue= [root];
    queue.add(root);
    while (!queue.isEmpty()) {
        root = queue.poll();
        if (root.right != null) queue.add(root.right);
        if (root.left != null) queue.add(root.left);
    }
    return root.val;
};
let arr = [], tmp = []

	bst(root, 0)
	function bst(tree, i) {
		if (!tree) {
			arr[i] = arr[i] || []
			arr[i].push(null)
			return
		}
		arr[i] = arr[i] || []
		arr[i].push(tree.val)

		bst(tree.left, i + 1)
		bst(tree.right, i + 1)
	}

  // 上面的递归因为在终止条件时候添加了null，所以会多出来一组null，在这里通过length - 2 获取树的最后一层
	tmp = arr[arr.length - 2]

  // 寻找从左到右第一个不为null的元素,并返回
	for (let i = 0; i < tmp.length; i++) {
		if (tmp[i] !== null) {
			return tmp[i]
		}
	}
