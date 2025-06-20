/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0;i < nums.length;i++){    //雙層迴圈是為了避免同索引相互配對
       for(let j = i+1;j < nums.length;j++){
        if (nums[i] + nums[j] === target){
               console.log([i,j]) 
               return [i,j]
            }
        }
    }
    return console.log("nothing")
};