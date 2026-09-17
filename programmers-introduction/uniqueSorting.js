function solution(numlist, n) {
  return numlist.sort((a, b) => {
    // 거리가 같을 때
    if (Math.abs(n - a) === Math.abs(n - b)) {
      // 원래 숫자에서 더 큰수를 앞에
      return b - a;
    } else {
      return Math.abs(n - a) - Math.abs(n - b);
    }
  });
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
