//分配饼干
var findContentChildren = function(g, s) {
  if(g==null || s==null) return 0;
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  var gi=0,si=0;
  var maxNum=0;
  while(gi<g.length && si<s.length){
      if(g[gi] <= s[si]){
          gi++;
          si++;
          maxNum++;
      }else{
          si++
      }
      
  }
  return maxNum;
};

var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let ans = 0
    let i = 0
    let j = 0    
    while (i <= g.length - 1 && j <= s.length - 1) {
        if(g[i] <= s[j]) {
            i++
            ans++
        }
        j++
    }
    return ans
};
