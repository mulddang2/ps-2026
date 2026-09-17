/** NOTE:
 * [x] 불필요한 replace() 연산 중복 -- str은 이미 길이가 1인 단일 문자이기 때문에, 조건이 참일 때 단순히 'l'믄지를 반환하는 것으로 충분함
 * [x] 과도한 중간 객체 생성 및 GC 부담 최소화 하기 -- 전개 연산자와 map() 사용을 지양하고 원본 문자열을 직접 탐색 해서 메모리 할당 최소화 하기
 * [x] replace()와 정규 표현식(/[a-k]/g)을 조합하여 C++ 네이티브 단에서 빠르게 처리되도록 작성하기
 *
 */

function solution(myString) {
  return myString.replace(/[a-k]/g, 'l');
}

console.log(solution('abcdevwxyz'));
console.log(solution('jjnnllkkmm'));
