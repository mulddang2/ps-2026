function solution(num_list) {
  const oddArr = [];
  const evenArr = [];
  num_list.filter((v, i) => (v % 2 === 0 ? evenArr.push(v) : oddArr.push(v)));

  return Number(oddArr.join("")) + Number(evenArr.join(""));
}

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));
