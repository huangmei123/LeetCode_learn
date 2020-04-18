// 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
var frequencySort = function(s){
    const map = new Map();
    for(let ch of s){
        const record = map.get(ch);
        if(!record){
            map.set(ch,1);
        }else{
            map.set(ch,record+1);
        }
    }
    const recordArr = [];
    for(let key of map.keys()){
        recordArr.push({
            str:key,
            count:map.get(key)
        })
    }
    recordArr.sort((a,b) => {
        return b.count-a.count;//降序
    })
    return recordArr.map((item) =>{
        return item.str.repeat(item.count)
    }).join('');
}