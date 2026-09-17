/** NOTE:
 * [x] filter 반환값 명확화 -- 요소(str) 대신 불리언 값(true/false)을 직접 반환하도록 수정하기
 * [x] 가독성 향상 -- 불필요한 if문 구문 제거하기
 * [x] 코드 간소화 -- 화살표 함수의 암묵적 반환(Implicit Return) 기법을 활용해 한 줄로 표현해보기
 */
function solution(strArr) {
  return strArr.filter((str) => !str.includes('ad'));
}

console.log(solution(['and', 'notad', 'abcd']));
console.log(solution(['there', 'are', 'no', 'a', 'ds']));
