function solution(order) {
  const orderStr = order.toString();
  let count = 0;

  for (const o of orderStr) {
    if (o === '3' || o === '6' || o === '9') {
      count += 1;
    }
  }
  return count;
}

console.log(solution(3));
console.log(solution(29423));
