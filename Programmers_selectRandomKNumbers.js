function solution(arr, k) {
  const uniqueArr = [...new Set(arr)];
  if (uniqueArr.length > k) return uniqueArr.slice(0, k);
  else if (uniqueArr.length === k) return uniqueArr;
  else {
    for (let i = 0; i <= k - uniqueArr.length; i++) {
      uniqueArr.push(-1);
    }
    return uniqueArr;
  }
}

console.log(solution([0, 1, 1, 2, 2, 3], 3));
console.log(solution([0, 1, 1, 1, 1], 4));
console.log(solution([0, 1, 3, 4, 4], 6));
console.log(solution([0], 1));
