
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