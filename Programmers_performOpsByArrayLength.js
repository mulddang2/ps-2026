function solution(arr, n) {
  const isOdd = arr.length % 2 !== 0 ? 1 : 0;
  if (isOdd) {
    return arr.map((v, i) => {
      if (i % 2 === 0) {
        return v + n;
      }
      return v;
    });
  } else {
    return arr.map((v, i) => {
      if (i % 2 !== 0) {
        return v + n;
      }
      return v;
    });
  }
}

console.log(solution([49, 12, 100, 276, 33], 27));
console.log(solution([444, 555, 666, 777], 100));
