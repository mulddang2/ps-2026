function solution(A, B) {
  const arrA = [...A];
  let count = 0;
  for (let i = 0; i < arrA.length; i++) {
    if (A === B) return 0;

    arrA.unshift(arrA.splice(-1, 1));
    count++;
    if (arrA.flat().join('') === B) return count;
  }
  return -1;
}

console.log(solution('hello', 'ohell'));
console.log(solution('apple', 'elppa'));
console.log(solution('atat', 'tata'));
console.log(solution('abc', 'abc'));
