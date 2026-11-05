function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  // 1. 여벌 체육복을 가져왔지만, 도난당한 학생 걸러내기
  let realReserve = reserve.filter((v) => !lost.includes(v));
  let realLost = lost.filter((v) => !reserve.includes(v));
  let answer = n - realLost.length;

  // 2. 남아있는 체육복 목록 - 빌려준 여벌 체육복은 바로 목록에서 제거
  for (let i = 0; i < realLost.length; i++) {
    const target = realLost[i];

    // 앞 번호 확인
    if (realReserve.includes(target - 1)) {
      realReserve = realReserve.filter((v) => v !== target - 1);
      answer++;
    } else if (realReserve.includes(target + 1)) {
      realReserve = realReserve.filter((v) => v !== target + 1);
      answer++;
    }
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
