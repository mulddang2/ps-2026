function solution(array) {
  const count = [];
  const result = [];
  for (let i = 0; i < array.length; i++) {
    count.push(array.filter((n) => n === array[i]).length);
  }
  const max = Math.max(...count);

  for (let i = 0; i < count.length; i++) {
    if (count[i] === max) result.push(array[i]);
  }
  const uniqueArr = [...new Set(result)];
  return uniqueArr.length === 1 ? uniqueArr[0] : -1;
}

console.log(solution([1, 2, 3, 3, 3, 4]));
console.log(solution([1, 1, 2, 2]));
console.log(solution([1]));
