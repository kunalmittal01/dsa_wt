//string-reversal

let stringReversal = function(s){
    let stk = [];
    for(i of s){
        stk.push(i);
    }
    let cnt = stk.length,res = "";
    while(cnt-- > 0){
        res += stk.pop();
    }
    return res;
}
console.log(stringReversal("kunalmittal"));

// Anagram Check

let isAnagram = function(s, t) {
    if(s.length != t.length)
       return false;

    const os = {};
    for(let i = 0; i < s.length; i++){
       os[s[i]] = (os[s[i]] == undefined)? 1: os[s[i]]+1;
    }
    const ot = {};
    for(let i = 0; i < t.length; i++){
       ot[t[i]] = (ot[t[i]] == undefined)? 1: ot[t[i]]+1;
    }

    for(const key in os){
        if(key in ot){
            if(os[key] != ot[key])
            {
                return false;
            }   
        }
        else{
            return false;
        }
    }
    return true;
};
console.log(isAnagram("anagram","nagaram"));

// Arrays Intersection

let intersection = function(nums1, nums2) {
    let obj1 = {},obj2 = {};
    for(let i of nums1){
        obj1[i] = (obj1[i] == undefined)?1:obj1[i]+1;
    }
    for(let i of nums2){
        obj2[i] = (obj2[i] == undefined)?1:obj2[i]+1;
    }
    let res = [];
    for(const k in obj1){
        if(k in obj2){
            res.push(parseInt(k));
        }
    }
    return res;
};

console.log(intersection([1,4,5,9,3,4],[4,3,1]));

// Plaindromic check

function isAlphanum(char){
    if(!isNaN(parseInt(char))){
        return true;
    }
    if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z'){
        return true;
    }
    return false;
 }
 function isUpper(char){
    if(char >= 'A' && char <= 'Z'){
        return true;
    }
 }
var isPalindrome = function(s) {
    let n = s.length,str = "";
    for(let i = 0; i < n; i++){
        if(isAlphanum(s[i])){
            str += s[i];
        }
    }
    let i = 0, j = str.length-1;
    while(i < j){
        let c1 = str[i],c2 = str[j];
        if(isUpper(c1)){
            c1 = c1.toLowerCase();
        }
         if(isUpper(c2)){
            c2 = c2.toLowerCase();
        }
        if(c1 != c2){
            return false;
        }
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));


// Rotate Array

function reverse(i,j,nums){
    while(i < j){
        let v = nums[i];
        nums[i] = nums[j];
        nums[j] = v;
        i++;
        j--;
    }
}

let rotate = function(nums, k) {
    k = k % nums.length;
    reverse(0,nums.length-k-1,nums);
    reverse(nums.length-k,nums.length-1,nums);
    reverse(0,nums.length-1,nums);
};

let nums = [1,2,3,4,5,6,7],k = 3;
rotate(nums,k);
console.log(nums);

//string Compression

// let strComp = function(s){
//     let cnt = 1, v = s[0],res = "";
//     for(let i = 1; i < s.length; i++){
//         if(s[i] == s[i-1]){
//             cnt++;
//         }
//         else{
//             res += (v + cnt);
//             v = s[i];
//             cnt = 1;
//         }
//     }
//     res += (v + cnt);
//     return res;
// }
// let result = strComp("aabcccccaaa"); 
// console.log(result);

// Array Sum

// let arraySum = function(arr,target){
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if((arr[i] + arr[j]) == target){
//                 res.push([arr[i],arr[j]]);
//             }
//         }
//     }
//     return res;
// }
// let result = arraySum([2,1,4,6,5,8],10);
// console.log(result)


// lengthOfLongestSubstring

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

