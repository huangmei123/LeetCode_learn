// 利用桶的解决思路
// 1.先用Map将出现的频率统计好
// 2，再创建桶，放到数组中，桶在数组中的下标，就是数字出现的频率
// 3.遍历这些桶，最先进入数组的K个数，就是最大或者最小

var topKFrequent = function(nums,k){
    if(nums == null) {return null}
    //先用map将出现的频率统计好
    let dict = new Map()
    for(let v of nums){
        let t = dict.get(v)
        dict.set(v,t == undefined ? 1:++t)
    }
    let arr = []
    dict.forEach(function(value,a){
        if(arr[dict.get(a)] == undefined){
            let tempArr = new Array()
            tempArr.push(a)
            arr[dict.get(a)] =tempArr
        }else{
            let c = arr[dict.get(a)]
            c.push(a)
        }
    });
    let result = []
    for(let i = arr.length-1;i>0;i--){
        let t = arr[i]
        if(t !=null){
            t.forEach((item,index,array) =>{
                if(result.length ==k){
                    return result
                }
                result.push(item)
            })
        }
    }
    return result
}