function solution(arr1, arr2) {
  const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

  if (arr1.length === arr2.length) {
    if (sum(arr1) < sum(arr2)) return -1;
    if (sum(arr1) === sum(arr2)) return 0;
    if (sum(arr1) > sum(arr2)) return 1;
  }
  return arr1.length > arr2.length ? 1 : -1;
}

console.log(solution([49, 13], [70, 11, 2]));
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36]));
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3]));
