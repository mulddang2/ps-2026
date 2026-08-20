function solution(arr, queries) {
  const answer = [];
  for (const [s, e, k] of queries) {
    const result = arr.slice(s, e + 1).filter((item) => item > k);

    if (result.length === 0) answer.push(-1);
    else answer.push(Math.min(...result));
  }
  return answer;
}