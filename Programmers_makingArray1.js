function solution(n, k) {
  const arr = [k];
  for (let i = k + k; i < n + 1; i = i + k) {
    arr.push(i);
  }
  return arr;
}