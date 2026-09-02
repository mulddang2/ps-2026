function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(solution([5, 1, 4]));
console.log(solution([6, 6]))
console.log(solution([1]))
