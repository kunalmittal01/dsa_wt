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