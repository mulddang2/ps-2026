function solution(nums) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i]);
  }

  return nums.length / 2 < numsMap.size ? nums.length / 2 : numsMap.size;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
