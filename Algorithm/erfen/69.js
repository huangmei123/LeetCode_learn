//计算并返回x的平方根 保留小数部分
//输入4 输出2 输入8 输出2
var mysql = function(x){
    if(x<=1){
        return x;
    }
    let l=1,h=x;
    while(l <= h){
        let mid  = l+(h-1)/2;
        let sqrt = x /mid;
        if(sqrt == mid){
            return mid;
        }else if(mid > sqrt){
            h=mid-1;
        }else{
            l = mid+1;
        }
    }
    return h;
}

var mySql = function(x){
    if(x==0 || x==1) {
        return x;
    }
    var left =1;
    var right =x;
    while(left <= right){
        var middle = left + ((right-left) >>1);
        if(middle*middle ==x){
            return middle
        }else if(middle*middle >x){
            right = middle-1;
        }else{
            left = middle+1;
        }
    }
    return right
}