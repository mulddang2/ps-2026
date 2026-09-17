/** NOTE:
 * [x] map이 매 라운드마다 100만 크기 배열을 새로 할당
 * [x] 이미 고정된 원소도 매 라운드 재방문
 * [x] 원소 값이 1~100뿐이고 각 원소는 서로 독립적으로
 *  - 각 원소는 다른 원소에 영향을 주지 않음 = 배열 전체 답 = 각 원소가 고정점에 도달하는데 걸리는 횟수의 최대값
 *  - 값의 종류가 100가지 -> 값별 결과를 한번만 계산해 캐싱
 */
function solution(arr) {
  const memo = new Int32Array(101).fill(-1);

  const stepsToFix = (n) => {
    if (memo[n] !== -1) return memo[n];
    let cur = n;
    let steps = 0;
    while (true) {
      if (cur >= 50 && cur % 2 === 0) cur /= 2;
      else if (cur < 50 && cur % 2 !== 0) cur = cur * 2 + 1;
      else break; // 두 조건 모두 해당 없음 = 고정점 (50 이상 홀수, 50 미만 짝수의 경우)
      steps++;
    }
    return (memo[n] = steps);
  };

  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    const s = stepsToFix(arr[i]);
    if (s > answer) answer = s;
  }
  return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
