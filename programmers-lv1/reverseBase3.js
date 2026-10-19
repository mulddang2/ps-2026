function solution(n) {
  let copyN = n;
  let remain = new Int32Array(17);

  let idx = 0;
  while (copyN !== 0) {
    remain[idx] = Math.floor(copyN % 3);
    Math.floor((copyN /= 3));
    idx++;
  }

  let base3 = remain.reverse();

  for (let i = 0; i < base3.length; i++) {
    if (base3[i] !== 0) {
      base3 = base3.slice(i);
      break;
    }
  }

  const reverseBase3 = base3.reverse();
  let toBase10 = 0;

  let power = 0;
  for (let i = reverseBase3.length - 1; i >= 0; i--) {
    toBase10 += reverseBase3[i] * 3 ** power;
    power++;
  }
  return toBase10;
}

// console.log(solution(45));
console.log(solution(125));
// console.log(solution(100000000));
