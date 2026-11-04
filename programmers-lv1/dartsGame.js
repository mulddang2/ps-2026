/** NOTE:
 * [x] 정규표현식 순회 방식 최적화
 * [x] 배열 합산 연산 간소화 (reduce 삭제 -> 고정 인덱스 접근하여 개선)
 */

function solution(dartResult) {
  const scores = [];
  const regex = /(\d{1,2})([SDT])([*#]?)/g;
  let match;

  while ((match = regex.exec(dartResult)) !== null) {
    let score = Number(match[1]);
    const bonus = match[2];
    const option = match[3];

    if (bonus === 'D') {
      score **= 2;
    } else if (bonus === 'T') {
      score **= 3;
    }

    if (option === '*') {
      score *= 2;
      if (scores.length > 0) {
        scores[scores.length - 1] *= 2;
      }
    } else if (option === '#') {
      score *= -1;
    }

    scores.push(score);
  }

  return scores[0] + scores[1] + scores[2];
}

console.log(solution('1S2D*3T'));
console.log(solution('1D2S#10S'));
console.log(solution('1D2S0T'));
console.log(solution('1S*2T*3S'));
console.log(solution('1D#2S*3S'));
console.log(solution('1T2D3D#'));
console.log(solution('1D2S3T*'));
