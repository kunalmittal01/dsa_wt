
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