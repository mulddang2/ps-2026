function solution(sides) {
  let maxNum = sides[0];
  let sum = 0;

  for (let i = 0; i < sides.length; i++) {
    if (sides[i] > maxNum) {
      maxNum = sides[i];
    } else {
      sum += sides[i];
    }
  }

  return maxNum < sum ? 1 : 2;
}

console.log(solution([1, 2, 3]));
console.log(solution([5, 5, 5]));
console.log(solution([3, 6, 2]));
console.log(solution([222, 72, 111]));
