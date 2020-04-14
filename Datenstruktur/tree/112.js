//判断路径是否等于一个数
//用递归的方式
var hashPathSum =function(root,sum){
    if(root == null ) return false;
    return hashPathSum(root.left,sum-root.val) || hashPathSum(root.right,sum-root.val);
}