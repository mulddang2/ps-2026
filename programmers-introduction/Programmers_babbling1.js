/** NOTE:
 * [x] replaceAll과 trim을 반복호출해서 새 문자열 생성하는 대신, startsWith와 인덱스 포인터 활용하여 메모리 할당 없이 탐색하기
 * [x] 치환 공백으로 인한 엣지 케이스 해결 -- ('mayawoo') 에서 오답
 * [x] 정규표현식 이용한 선언적 검증 로직 적용 -- test() 함수 활용
 */

function solution(babbling) {
  // 1. 인덱스 포인터 기반 탐색 (startsWith 활용)
  let count = 0;
  const sounds = ['aya', 'ye', 'woo', 'ma'];

  for (const word of babbling) {
    let i = 0;
    let isValid = true;

    while (i < word.length) {
      let matched = false;
      for (const sound of sounds) {
        if (word.startsWith(sound, i)) {
          i += sound.length;
          matched = true;
          break;
        }
      }
      // 4가지 발음 중 어떤 것도 매칭되지 않으면 실패
      if (!matched) {
        isValid = false;
        break;
      }
    }
    if (isValid) count++;
  }
  return count;

  // 2. 정규표현식 활용
  // const regex = /^(aya|ye|woo|ma)+$/;
  // return babbling.filter(word => regex.test(word).length;
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']));
