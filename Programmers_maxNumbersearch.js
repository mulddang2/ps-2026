function solution(array) {
  const maxNumber = Math.max(...array);
  const maxIndex = array.indexOf(maxNumber);
  const result = [maxNumber, maxIndex];
  return result;
}

console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));
