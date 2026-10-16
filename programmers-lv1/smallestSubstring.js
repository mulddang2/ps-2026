function solution(t, p) {
  const tArr = [];

  for (let i = 0; i < t.length; i++) {
    tArr.push(t.slice(i, i + p.length));
  }
  return tArr
    .filter((v) => v.length === p.length)
    .reduce((acc, cur) => {
      if (Number(cur) <= Number(p)) {
        acc += 1;
      }
      return acc;
    }, 0);
}

console.log(solution('3141592', '271'));
console.log(solution('500220839878', '7'));
console.log(solution('10203', '15'));
