/** FIXME:
 * [x] if (mode === 0) / if (mode === 1) 두 블록을 else if로 연결하기
 * [x] continue 제거 — else if로 바꾸면서 불필요해짐
 * [x] 분기 기준을 mode가 아니라 code[i] === "1"로 바꾸기
 * [x] "mode 0 → 짝수, mode 1 → 홀수"를 i % 2 === mode로 통합하기
 * [x] mode 대입을 토글 한 줄로 (mode = mode === 0 ? 1 : 0)
 * [x] ret.length !== 0 → ret.length
 * [x] const ch = code[i]로 한 번만 꺼내 쓰기
 */

function solution(code) {
  let mode = 0;
  const ret = [];
  for (let i = 0; i < code.length; i++) {
    const ch = code[i];
    if (ch === "1") {
      mode = mode === 0 ? 1 : 0;
    } else if (i % 2 === mode) {
      ret.push(ch);
    }
  }
  return ret.length ? ret.join("") : "EMPTY";
}
