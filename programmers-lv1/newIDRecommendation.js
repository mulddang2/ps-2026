/** NOTE:
 * [x] 메서드 체이닝 활용
 */
/** 1단계: 소문자 치환
 *  2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 제외 제거
 *  3단계: 마침표 2번 이상 연속된 부분을 하나의 마침표로 치환
 *  4단계: 마침표가 처음이나 끝에 위치하면 제거
 *  5단계: 빈 문자열이면 'a' 대입
 *  6단계: 16자 이상이면 첫 15개 문자만 남기기
 *  6단계 후속: 제거 후 마침표가 끝에 위치하면 제거
 *  7단계: 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 떄까지 반복해서 끝에 붙이기
 *
 */

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1단계
    .replace(/[^\w.-]/g, '') // 2단계: \w는 a-z, A-Z, 0-9, _(underscore) 포함
    .replace(/\.{2,}/g, '.') // 3단계
    .replace(/^\.|\.$/g, '') // 4단계
    .replace(/^$/, 'a') // 5단계
    .slice(0, 15) // 6단계
    .replace(/\.$/, ''); // 6단계 후속

  return answer.padEnd(3, answer[answer.length - 1]); // 7단계
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklmn.p'));
