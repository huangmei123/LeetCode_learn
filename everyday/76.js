//最小覆盖子串
// 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串string minWindow(string s,string t){

var minWindow =function(s,t){
    let windows ={},needs={},l=0,count=0,start=-1,minLen=Infinity;
    [...t].forEach(c => needs[c] ? needs[c]++ : needs[c] = 1)
    let keyLen = Object.keys(needs).length;
    while (r < s.length) {
        let c1 = s[r++];
        windows[c1] ? windows[c1]++ : windows[c1] = 1;
        if (windows[c1] === needs[c1]) count++;
        while(count === keyLen) {
            if (r - l < minLen) {
                start = l;
                minLen = r - l;
            }
            let c2 = s[l++];
            if (windows[c2]-- === needs[c2]) count--;
        }
    }
    return start === -1 ? "" : s.substr(start, minLen)
}