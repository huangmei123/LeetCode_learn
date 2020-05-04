//完成树的前序遍历
//从根节点开始，每次丢带弹出当前栈顶元素，将其孩子节点压入栈中，先压右孩子再压左孩子。
//top->bottm  left->right
//时间复杂度O(N)(N为节点个数，也是树的大小)
//空间复杂度 取决于树的结构 最差O(N)
var preorderTraversal = function(root) {
  let arr =[],res=[]
  root && arr.push(root)

  while(arr.length>0){
      let cur=arr.pop()
      res.push(cur.val)
      cur.right && arr.push(cur.right)
      cur.left && arr.push(cur.left)
  }
  return res
};

var preorderTraversal = function(root) {
    let ret =[],stack=[]
    stack.push(root)
  
    while(stack.length>0){
      let node = stack.pop();
      if(node ==null) continue;
      ret.add(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }
    return ret;
  };