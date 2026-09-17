/** NOTE:
 * [x] 반복되는 형변환 제거: separator[0]과 separator[2]를 switch 문에 들어가기 전 미리 Number()나 BigInt() / parseInt()로 변환하기
 * [x] 연산자 처리 통일성: * 케이스 내부의 Number(...) 감싸기 방식을 +, -와 동일한 패턴으로 수정하기
 * [x] 구조 분해 할당(Destructuring) 활용: const [a, op, b] = binomial.split(' ') 형태로 변수를 받아 직관적으로 작성해보기
 */

function solution(binomial) {
  const [aStr, op, bStr] = binomial.split(' ');
  const a = Number(aStr);
  const b = Number(bStr);

  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
  }
}

console.log(solution('43 + 12'));
console.log(solution('0 - 7777'));
console.log(solution('40000 * 40000'));
