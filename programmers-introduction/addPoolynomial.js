/** NOTE:
 * 1. 문자열 암묵적 결합 버그 수정하기
 * 2. 계수 1 생략 및 단독 변수 처리하기
 * 3. 결과 문자열 구성 조건문 단순화하기 
*/

function solution(polynomial) {
  let xCount = 0;
  let numCount = 0;

  // 1. ' + ' 공백을 포함한 연산자로 구분하여 각 항을 추출
  const terms = polynomial.split(' + ');

  for (const term of terms) {
    if (term.includes('x')) {
      // 'x'를 제거한 후 계수 추출
      const coeff = term.replace('x', '');
      // 빈문자열이면 계수는 1
      xCount += coeff === '' ? 1 : Number(coeff);
    } else {
      numCount += Number(term);
    }
  }

  // 2. 결과 조합 (배열과 join 활용해 엣지 케이스 처리)
  const result = [];
  if (xCount > 0) {
    result.push(xCount === 1 ? 'x' : `${xCount}x`);
  }
  if (numCount > 0) {
    result.push(numCount);
  }

  return result.join(' + ');
}

console.log(solution('3x + 7 + x'));
console.log(solution('x + x + x'));
