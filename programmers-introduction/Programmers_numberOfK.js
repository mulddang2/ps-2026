function solution(i, j, k) {
  let count = 0;
  for (let num = i; num <= j; num++) {
    let numToStr = String(num).split('');
    numToStr.forEach((v) => {
      if (v === String(k)) {
        count++;
      }
    });
  }
  return count;
}

console.log(solution(1, 13, 1));
console.log(solution(10, 50, 5));
console.log(solution(3, 10, 2));
