function solution(strArr) {
  const count = {};
  let maxValue = 0;
  for (const str of strArr) {
    let len = str.length;
    count[len] = (count[len] || 0) + 1;

    if (maxValue < count[len]) {
      maxValue = count[len];
    }
  }
  return maxValue;
}

console.log(solution(['a', 'bc', 'd', 'efg', 'hi']));
