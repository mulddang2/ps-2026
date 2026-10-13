function solution(absolutes, signs) {
  let total = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      total += absolutes[i];
    } else {
      total -= absolutes[i];
    }
  }
  return total;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
