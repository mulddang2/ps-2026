function solution(arr) {
  let temp = arr[0];
  const answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (temp === arr[i]) {
      continue;
    } else {
      temp = arr[i];
      answer.push(temp);
    }
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
