function solution(array, height) {
  let count = 0;

  for (const h of array) {
    if (h > height) count++;
  }

  return count;
}

console.log(solution([149, 180, 192, 170], 167));
console.log(solution([180, 120, 140], 190));
