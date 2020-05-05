//找比目标字母大的最小字母
var nextGreatestLetter = function (letters,target){
    let left = 0;
    let right = letters.length - 1;
    while(left <= right) {
        let middle = parseInt((left + right) / 2);
        if (target < letters[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return letters[left % letters.length];
}

   

