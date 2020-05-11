//x的n次幂
var myPow = function(x, n) {
    //二次幂
    if(n===0)return 1;
    if(x===0)return 0;
    if(n<0){
        x=1/x;
        n=Math.abs(n);

    }
    let res = 1;
    while(n !==1){
        if(n%2 !==0) res *=x;
        x *=x;
        n=Math.floor(n/2);
    }
    return x * res;
  };
//递归
/*
定义递归函数pow（x，n） 返回计算出的结果
边界条件

*/
  var myPow = function(x, n) {
   if(n===0)return 1;
   if(n<0){
       x=1/x;
       n=Math.abs(n);
   }
   if(n===1)return x;
   let half =myPow(x,Math.floor(n/2));
   let res = half *half;
   if(n%2!==0){
       res *=x;
   }
   return res;
  };

  