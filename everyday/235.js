var lowestCommonAncestor = function(root, p, q) {
    let pv=p.val,qv=q.val,rv=root.val;
    if(rv==pv) return root;
    if(rv==qv) return root;
    if((pv<rv && qv>rv) || (pv>rv&&qv<rv)) return root;
    if(pv<rv) return lowestCommonAncestor(root.left,p,q)
    else
    return lowestCommonAncestor(root.right,p,q);
};