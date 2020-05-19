//验证回文字符串2
/* 
 给定一个非空字符串s 最多删除一个字符 判断是否能成为回文字符
 abca True 解释：因为可以删除c字符
1.暴力枚举法 对于s中的每一个字符都删除 然后检查是否是回文。（超过时间限制）
2.贪心 
- 字符串的起始和结束字符相同 则内部字符是否为回文决定了是否为回文
- ...不同 则必须删除s[0]或者s[s.length-1]才有可能使s成为回文

 */
var validPalindrome = function(s, flag = true) {
    let l = 0, r = s.length - 1;
    while (l < r && s[l] === s[r]) l++, r--;
    if (r <= l) return true;
    if (flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)
    return false;
};

var validPalindrome = function(s) {
    let left = 0;
    let right = s.length -1;

    while(left < right){
        if(s[left] !== s[right]){
            let str = s.split("");
            let strRight = s.split("");
            str.splice(left,1)
            strRight.splice(right,1)
        
            return str.join("") === str.reverse().join("") || strRight.join("") === strRight.reverse().join("")
        }
        left++
        right--
    }

return true;
}