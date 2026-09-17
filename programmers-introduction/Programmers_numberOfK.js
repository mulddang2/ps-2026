/** NOTE:
 * [x] 반복문 내부의 불필요한 연산 추출하기 ex. k의 문자열 변환
 * [x] split('') 대신 문자열 인덱싱(str[idx]) 접근 활용하기
 * [x] 불필요한 고차함수(forEach) 콜백 오버헤드 방지하기
 * [x] 형변환 없는 자릿수 추출 구현하기 --> 수학적 연산 방식 고려
 */

function solution(i, j, k) {
  let count = 0;

  for (let num = i; num <= j; num++) {
    let temp = num;
    while (temp > 0) {
      if (temp % 10 === k) count++;
      temp = Math.floor(temp / 10);
    }
  }
  return count;
}

console.log(solution(1, 13, 1));
console.log(solution(10, 50, 5));
console.log(solution(3, 10, 2));
