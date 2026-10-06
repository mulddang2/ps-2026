function solution(hp) {
  const first = Math.floor(hp / 5);
  const second = Math.floor((hp % 5) / 3);
  const third = Math.floor(second % 3);
  let count = 0;
  if (first * 5 <= hp) {
    count += first;
    if (first * 5 + second * 3 <= hp) {
      count += second;
      if (first * 5 + second * 3 + third * 1 === hp) {
        count += third;
      }
    }
  }
  return hp > 0 && hp < 3 ? 1 : count;
}
// console.log(solution(23))
// console.log(solution(24))
// console.log(solution(999))
// console.log(solution(3));
// console.log(solution(2));
console.log(solution(32));
