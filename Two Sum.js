var twoSum = function(nums, target){
var temp
for (var i =0; i<nums.length;++i){
		temp=target-nums[i]
	for (var j =0; j<nums.length;++j){

			if (temp==nums[j]){
					if(i!==j){
						return [i,j]
					}	
			}	
		}
	}
}

arr=[2,5,6,9]
tar=14
console.log(twoSum(arr,tar))


