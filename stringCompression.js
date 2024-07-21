
let strComp = function(s){
    let cnt = 1, v = s[0],res = "";
    for(let i = 1; i < s.length; i++){
        if(s[i] == s[i-1]){
            cnt++;
        }
        else{
            res += (v + cnt);
            v = s[i];
            cnt = 1;
        }
    }
    res += (v + cnt);
    return res;
}
let result = strComp("aabcccccaaa"); 
console.log(result);