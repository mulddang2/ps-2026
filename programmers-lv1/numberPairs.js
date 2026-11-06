function solution(X, Y) {
  // 0부터 9까지의 숫자가 X와 Y에 각각 몇 개씩 들어있는지
  const xArr = new Array(10).fill(0);
  const yArr = new Array(10).fill(0);
  let result = '';

  X.split('').forEach((v) => xArr[+v]++);

  Y.split('').forEach((v) => yArr[+v]++);

  for (let i = 9; i >= 0; i--) {
    let commonNum = String(Math.min(xArr[i], yArr[i]));

    if (commonNum > 0) {
      // i를 commonNum번 반복해서 result에 추가
      result += String(i).repeat(commonNum);
    }
  }
  // result가 완전히 비어있는 경우
  if (result.length === 0) return '-1';
  // result가 '000'과 같이 0으로만 이뤄진 경우
  if (result[0] === '0') return '0';

  return result;
}
