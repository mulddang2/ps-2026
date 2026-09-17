/** NOTE
 * [x] pat의 길이를 고려한 인덱스 계산 -- lastIndexOf(pat)가 반환하는 값은 패턴의 시작 인덱스임을 인지하고, 끝나는 위치를 위해 + pat.length를 더해주었는가?
 * [x] 중복 로직 통합 및 조건문 단순화 -- indexOf와 lastIndexOf의 비교 분기문 없이, lastIndexOf 하나만으로 단일화하였는가?
 * [x] 다양한 예외 케이스 검증 -- pat의 길이가 2 이상이면서 여러 번 등장하는 케이스(예: solution("ABABAB", "AB"))를 테스트해보았는가?
 */
function solution(myString, pat) {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}

console.log(solution('AbCdEFG', 'dE'));
console.log(solution('AAAAaaaa', 'a'));
console.log(solution('ABABAB', 'AB')); // 기존 코드에서 오류나던 케이스
