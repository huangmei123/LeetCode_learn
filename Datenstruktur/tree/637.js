//给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.
//利用队列逐层遍历二叉树，然后计算当前所有元素的平均值
var average=function(root){
    let res = [];
    if(!root) return res;
    let queue= [root];
    while(queue.length){
        let length = queue.length;
        let sum = 0;
        for(let i=0;i<length;i++){
            let node = queue.shift();
            sum +=node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(sum/length);
    }
    return res;
}
let queue = [root], result = [], arr = [], sum = 0, length = 1
    while (queue.length) {
        let node = queue.shift()
        sum += node.val
        node.left && arr.push(node.left)
        node.right && arr.push(node.right)
        if (queue.length === 0) {
            result.push(sum/length)
            queue = arr
            length = queue.length
            arr = []
            sum = 0
        }
    }
    return result

