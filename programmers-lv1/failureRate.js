function solution(N, stages) {
  let curStage = 1;
  let result = [];
  while (curStage <= N) {
    let users = stages.filter((s) => s >= curStage).length;
    let fail = stages.filter((s) => s === curStage).length;
    let failRate = users === 0 ? 0 : fail / users;
    result.push({ stage: curStage, rate: failRate });
    curStage++;
  }

  result.sort((a, b) => {
    if (b.rate === a.rate) {
      return a.stage - b.stage; // 번호가 작은것 먼저
    }
    return b.rate - a.rate; // 실패율 높은 것이 먼저
  });
  return result.map((item) => item.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
// console.log(solution(4, [4, 4, 4, 4, 4]));
