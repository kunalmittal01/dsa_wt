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