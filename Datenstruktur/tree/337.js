//打家劫舍3 
var rob = function(root){
    if(root==null) return 0;
    let vall = root.val;
    if(root.left != null) vall+=rob(root.left.left) +rob(root.left.right);
    if(root.right != null) vall+=rob(root.right.right) +rob(root.right.right);
    let val2=rob(root.left) + rob(root.right)
    return Math.max(vall,val2);
}