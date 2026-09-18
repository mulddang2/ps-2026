function solution(n) {
  const countArr = [];

  let i = 1;
  while (countArr.length < n) {
    while (i % 3 === 0 || String(i).includes('3')) {
      i++;
    }
    countArr.push(i);
    i++;
  }
  return countArr.at(-1);
}

console.log(solution(15));
console.log(solution(40));
