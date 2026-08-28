function solution(arr) {
  return arr.map((v, i) => {
    let cur = v;
    if (cur >= 50 && cur % 2 === 0) {
      return (cur /= 2);
    } else if (cur < 50 && cur % 2 !== 0) {
      return cur * 2;
    } else return cur;
  });
}

console.log(solution([1, 2, 3, 100, 99, 98]));
