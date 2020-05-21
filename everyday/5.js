var longestPalindrome = function(s) {
    if(!s || s === "") return s;
    let max = s[0];//最长回文子串
    let loop = 0;//循环次数
    //1、循环次数不能超过字符串长度
    //2、由于是从字符串的中心先作为第一个开始下标，然后依次 向右、向左 作为下一个开始下标
    //   当max达到一定长度，后面肯定不会出现比max更长的回文子串
    while(loop < s.length && max.length <= s.length - loop) {    
        //算出开始下标 idx 
        //abcdefg  开始下标分别为decfbga
        //abcdefgh 开始下标分别为decfbgah
        let idx = Math.floor((s.length - 1) / 2) + Math.ceil(loop / 2) * (loop % 2 ? 1 : -1);
     
        let n = 0;
        let same = 0;
        let isBreak  = false;
        while(idx - n - 1 >= 0 && s[idx - n - 1] == s[idx + n + 1]){
            if(!isBreak && s[idx] == s[idx + n + 1]){
                same++;
            }else{
                isBreak = true;
            }
            n++;
        }
        max =  n * 2 + 1 > max.length ? s.slice(idx - n, idx + n + 1) : max;
        if(s[idx] == s[idx + same + 1] && s[idx] != s[idx - same - 1]){
            n = same;
            while(idx - n - 1 >= 0 && s[idx - n - 1] == s[idx + n + 2]){
                n++;
            }
            max =  n * 2 + 2 > max.length ? s.slice(idx - n, idx + n + 2) : max;
        }
        loop++;
    }
    return max;
};
