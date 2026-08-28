function solution(arr) {
  let numArr = [...arr];
  let count = 0;
  let changed;

  do {
    changed = false;
    numArr = numArr.map((n) => {
      if (n >= 50 && n % 2 === 0) {
        changed = true;
        return n / 2;
      } else if (n < 50 && n % 2 !== 0) {
        changed = true;
        return n * 2 + 1;
      } else {
        return n;
      }
    });

    if (changed) count++;
  } while (changed);
  return count;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
