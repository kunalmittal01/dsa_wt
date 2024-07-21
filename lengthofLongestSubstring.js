let lengthOfLongestSubstring = function(s) {
    const obj = {};
    let len = 0, maxlen = 0, i = 0;

    for(let j = 0; j < s.length; j++) {
        if(s[j] in obj) {
            i = Math.max(obj[s[j]] + 1, i);
        }
        obj[s[j]] = j;
        len = j - i + 1;
        if(len > maxlen) {
            maxlen = len;
        }
    }
    
    return maxlen;
};

let result = lengthOfLongestSubstring("abcabcbb");
console.log(result);
