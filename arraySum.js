let arraySum = function(arr,target){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if((arr[i] + arr[j]) == target){
                res.push([arr[i],arr[j]]);
            }
        }
    }
    return res;
}
let result = arraySum([2,1,4,6,5,8],10);
console.log(result)