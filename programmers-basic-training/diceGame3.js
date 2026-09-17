/** NOTE:
 * [x] sort 콜백의 매개변수명 a, b가 함수 인자 a, b를 섀도잉 (Programmers_diceGame3.js:5). 동작엔 문제없지만 혼란을 주므로 (x, y) => x - y로 변경.
 * [x] numArrSort는 새 배열이 아님. Array.prototype.sort는 제자리 정렬 후 같은 참조를 반환하므로 numArr와 동일 객체입니다. 변수 두 개는 불필요 — 하나로 합치거나 [...numArr].sort(...)로 의도를 명확히.
 * [x] Math.min(...numArrSort) 불필요 (:9). 이미 오름차순이므로 w.
 * [x] 독립적인 if 4개 → switch 또는 else if 체인. 서로 배타적인 조건인데 매번 전부 평가합니다.
 * [x] score 누적 변수 대신 조기 return. let 제거 가능하고 각 분기가 무엇을 반환하는지 즉시 보입니다.
 * [x] 인덱스 접근보다 구조 분해가 읽기 쉽습니다: const [w, x, y, z] = ...
 * [x] size === 2의 세 번째 분기 조건 단순화 (:27). 앞 두 분기를 통과했다면 남는 경우는 하나뿐이므로 else로 충분.
 */

function solution(a, b, c, d) {
  const [w, x, y, z] = [a, b, c, d].sort((p, q) => p - q)

  const kinds = new Set([w, x, y, z]).size;

  switch (kinds) {
    case 1:
      return 1111 * w;
    case 2:
      // 2+2 형태
      if (w === x && y === z) return (w + y) * Math.abs(w - y)
      // 3+1 형태: 세 개는 같은 값 p, 남은 것 q
      return w === x ? (10 * w + z) ** 2 : (10 * z + w) ** 2;
    case 3:
      // 2+1+1 형태: 두개는 같은 값(한쌍)
      if (w === x) return y * z;
      if (x === y) return w * z;
      return w * x;
    // 네 주사위 숫자 모두 다른 경우
    default:
      return w;
  }
}

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));





