function solution(dartResult) {
  const regex = /(\d{1,2})([SDT])([*#]?)/g;
  const scoresArr = [];
  const matches = [...dartResult.matchAll(regex)];
  // idx 1 - 숫자, idx 2 - 보너스, idx 3 - 옵션
  for (const match of matches) {
    let number = Number(match[1]);
    const bonus = match[2];
    const option = match[3];

    // 보너스 까지 점수
    let currentScore = 0;
    if (bonus === 'S') {
      currentScore = number ** 1;
    } else if (bonus === 'D') {
      currentScore = number ** 2;
    } else if (bonus === 'T') {
      currentScore = number ** 3;
    }

    scoresArr.push(currentScore);

    // '*' 옵션에서 이전값 * 2, 첫번째는 첫번째원소만 *2
    if (option === '*') {
      scoresArr[scoresArr.length - 1] *= 2; // 보너스 까지 계산한 현재 점수를 2배

      if (scoresArr.length > 1) {
        scoresArr[scoresArr.length - 2] *= 2; // 이전 원소가 있는 경우
      }
    } else if (option === '#') {
      scoresArr[scoresArr.length - 1] *= -1;
    }
  }
  return scoresArr.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution('1S2D*3T'));
console.log(solution('1D2S#10S'));
console.log(solution('1D2S0T'));
console.log(solution('1S*2T*3S'));
console.log(solution('1D#2S*3S'));
console.log(solution('1T2D3D#'));
console.log(solution('1D2S3T*'));
