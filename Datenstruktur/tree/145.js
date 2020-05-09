//前序遍历为 root -> left -> right，后序遍历为 left -> right -> root。
//可以修改前序遍历成为 root -> right -> left，那么这个顺序就和后序遍历正好相反
var postorderTraversal = function(root) {
  let res=[],stack=[];
  while(root){
      //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
      //unshift() 方法不创建新的创建，而是直接修改原有的数组
      //提示：要把一个或多个元素添加到数组的尾部，请使用 push() 方法
      res.unshift(root.val)
      if(root.left)stack.push(root.left)
      if(root.right)stack.push(root.right)
      root=stack.pop()
  }
  return res
};