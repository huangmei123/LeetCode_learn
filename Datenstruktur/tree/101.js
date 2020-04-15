//对称二叉树
var isSymmetric = function(root) {
    return root ? checkNode(root.left, root.right) : true;
  };
  
  function checkNode(left, right) {
    while (left || right) {
      // 在这里打印日志观察访问顺序和镜像对应位置的值
      // console.log(left && left.val, right && right.val);
      if (!left || !right) return false;
      if (!checkNode(left.right, right.left)) return false;
      if (left.val !== right.val) return false;
      left = left.left;
      right = right.right;
    }
    return true;
}