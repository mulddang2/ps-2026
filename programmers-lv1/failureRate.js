/** NOTE: filter는 매번 실행시 마다 새로운 배열을 동적 생성하기 떄문에 while 루프 안에서 두번씩 호출하면 시간 초과 위험있음.
 *
 */
function solution(N, stages) {
  // 1. 각 스테이지별 머물러 있는 사용자 수를 저장할 배열 초기화 (1번 부터 N + 1까지);
  const stageCounts = new Array(N + 2).fill(0);
  for (const stage of stages) {
    stageCounts[stage]++;
  }

  let totalUsers = stages.length;
  const failRates = [];

  // 2. 스테이지별 실패율 계산 (O(N))
  for (let i = 1; i <= N; i++) {
    const currentUsers = stageCounts[i];

    // 스테이지에 도달한 유저가 없는 경우: 실패율 0
    const failRate = totalUsers === 0 ? 0 : currentUsers / totalUsers;

    failRates.push({ stage: i, rate: failRate });

    // 다음 스테이지 도달 유저 수 = 현재 스테이지 도달 유저 수 - 멈춘 유저 수
    totalUsers -= currentUsers;
  }
  // 3. 실패율 내림차순, 실패율이 같으면 스테이지 번호 오름차순 정렬
  failRates.sort((a, b) => {
    if (b.rate === a.rate) {
      return a.stage - b.stage;
    }
    return b.rate - a.rate;
  });

  return failRates.map((item) => item.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
// console.log(solution(4, [4, 4, 4, 4, 4]));
