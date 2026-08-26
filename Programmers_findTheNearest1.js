function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) return i;
    else if (arr[i] === 0 && i !== arr.length) continue;
  }
  return -1;
}
