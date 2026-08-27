function solution(num_list) {
  const evenArr = [];
  const oddArr = [];
  num_list.forEach((v, i) => (i % 2 === 0 ? evenArr.push(v) : oddArr.push(v)));

  return Math.max(
    evenArr.reduce((acc, cur) => acc + cur),
    oddArr.reduce((acc, cur) => acc + cur),
  );
}
