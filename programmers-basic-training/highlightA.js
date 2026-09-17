/** NOTE:
 * [x] 중복 순회 최소화: 전체 문자열을 toLowerCase()로 먼저 소문자화하여 대문자 변환 로직을 일괄 처리하기
 * [x] 메서드 체이닝 활용: toLowerCase()와 replaceAll()을 연결하여 불필요한 intermediate 변수(strA, result) 생성 줄이기
 * [x] 반복문 제어 변수 가독성: 루프 내부에서 제어 변수(str)의 값을 직접 재할당하는 패턴을 피하기
 */
function solution(myString) {
  return myString.toLowerCase().replaceAll('a', 'A');
}

console.log(solution('abstract algebra'));
console.log(solution('PrOgRaMmErS'));
