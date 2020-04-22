/*只要记录前面的最小价格，
将这个最小价格作为买入价格，然后将当前的价格作为售出价格，
查看当前收益是不是最大收益。*/
var maxProfit = function(prices){
    let n =prices.length;
    if(n == 0) return 0;
    let soFarmin = prices[0];
    let max = 0;
    for(let i=1 ; i<n ; i++){
        if(soFarmin>prices[i]){
            soFarmin=prices[i];
        }else{
            max=Math.max(max,prices[i]-soFarmin)
        }
    }
    return max;
}