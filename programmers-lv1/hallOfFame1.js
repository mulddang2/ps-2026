function solution(k, score) {
  const frame = [];
  const result = []; // 매일 최하위 점수
  for (let i = 0; i < score.length; i++) {
    frame.push(score[i]);
    frame.sort((a, b) => b - a);
    if (frame.length > k) frame.pop();
    result.push(frame[frame.length - 1]);
  }
  return result;
}

// console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
