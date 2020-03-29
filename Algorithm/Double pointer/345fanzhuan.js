var reverseVowels = function(s) {
    var vowels = "aeiouAEIOU";
    // split() 方法用于把一个字符串分割成字符串数组。
    var sArr = s.split('');
    var i = 0;
    var j = s.length - 1;
    while(i < j) {
        // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
        if (vowels.indexOf(sArr[i]) === -1 && vowels.indexOf(sArr[j]) !== -1) {
            i++;
        } else if (vowels.indexOf(sArr[i]) !== -1 && vowels.indexOf(sArr[j]) === -1) {
            j--;
        } else if (vowels.indexOf(sArr[i]) === -1 && vowels.indexOf(sArr[j]) === -1) {
            i++;
            j--;
        } else {
            [sArr[i],sArr[j]] = [sArr[j],sArr[i]];
            i++;
            j--;
        }
    }
    return sArr.join('');
};

console.log(reverseVowels('leetcode'));