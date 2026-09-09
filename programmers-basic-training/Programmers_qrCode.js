/** NOTE:
 * [x] map을 forEach와 구분하기 -- map은 반환값 배열을 만드는 함수인데 반환값을 버리고 있음. 읽는 사람에게 "변환 결과를 쓰겠다"는 잘못된 신호를 줄 수 있다. 부수효과 목적이면 forEach, filter를 사용하는게 의도에 적합함.
 * [x] [...code] 전개가 불필요 -- 문자열은 인덱스 접근이 가능하고, 문제 조건상 영소문자만 나오므로 굳이 배열을 새로 만들 이유가 없다.
 * [x] result 누적 -> 인덱스 점프로 대체 가능
 * [x] if 한줄에 중괄호 생략
 *
 */

function solution(q, r, code) {
  // [x] r부터 q칸씩 건너뛰며 모은다 는 형태로 수정
  // let answer = '';
  // for (let i = r; i < code.length; i += q) {
  //   answer += code[i];
  // }
  // return answer;
  // [x] filter 사용해서 작성해보기
  return [...code].filter((_, i) => i % q === r).join('');
}

console.log(solution(3, 1, 'qjnwezgrpirldywt'));
