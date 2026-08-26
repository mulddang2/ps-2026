function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  const intervalList = [];
  for (let i = 0; i < num_list.length; i++) {
    if (n === 1) {
      return num_list.slice(0, b + 1);
    }
    if (n === 2) {
      return num_list.slice(a);
    }
    if (n === 3) {
      return num_list.slice(a, b + 1);
    }
    if (n === 4) {
      for (let i = a; i <= b; i += c) {
        intervalList.push(num_list[i]);
      }
      return intervalList;
    }
  }
}

console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
