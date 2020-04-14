var pathSum = function(root, sum) {
    if (root == null) return 0;
      let ret = pathSumStartWithRoot(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
      return ret;
  };
  var pathSumStartWithRoot=function( root,  sum) {
      if (root == null) return 0;
      let ret = 0;
      if (root.val == sum) ret++;
      ret += pathSumStartWithRoot(root.left, sum - root.val) + pathSumStartWithRoot(root.right, sum - root.val);
      return ret;
  }