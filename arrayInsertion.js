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