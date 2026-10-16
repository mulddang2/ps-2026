/** NOTE:
 * [X] 문제 제한 사항에서 p의 길이가 최대 18인데, js Number.MAX_SAFE_INTEGER가 16자리 이기 때문에, 오차 발생 위험있음 -- BigInt 사용 필수
 * [X] 불필요한 중간 배열 객체 삭제해보기
 * [X] t의 전체 길이 순회하지 않고, 부분문자열 만들수 있는 위치까지만 반복
 */

function solution(t, p) {
  let count = 0;
  const pLen = p.length;
  const pBig = BigInt(p);

  for (let i = 0; i <= t.length - pLen; i++) {
    const subStr = t.slice(i, i + pLen);

    // BigInt를 사용해서 18자리 이하 큰 수도 정확하게 비교!
    if (BigInt(subStr) <= pBig) {
      count++;
    }
  }
  return count;
}

console.log(solution('3141592', '271'));
console.log(solution('500220839878', '7'));
console.log(solution('10203', '15'));
