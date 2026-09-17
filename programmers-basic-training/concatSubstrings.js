/** NOTE:
 * [x] parts[i][0] / parts[i][1] 구조분해 — const [s, e] = parts[i]로 풀면 의미가 드러나고 인덱스 오타 위험이 줄어듦
 * [x] 인덱스 루프 → for...of 또는 배열 메서드 — 두 배열을 인덱스로 짝짓는 것 외엔 i를 쓰지 않으므로 parts.entries()나 map + join이 더 선언적
 * [x] 문자열 += 누적 → 배열 join — 이 문제 규모(최대 100×100자)에선 성능 차이가 없지만, 결과 조각을 모아 마지막에 합치는 패턴이 더 일반적
 */
function solution(my_strings, parts) {
  return parts.map(([s, e], i) => my_strings[i].slice(s, e + 1)).join('')
}

console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]]))