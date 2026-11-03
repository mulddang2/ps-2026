function solution(keymap, targets) {
  // 알파벳 대문자 'A'~'Z'에 해당하는 최소 누름 횟수 저장
  const charMinPress = new Array(26).fill(Infinity);

  // 1. keymap 순회하며 각 문자의 최소 누름 횟수 기록
  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      const idx = key.charCodeAt(i) - 65;
      const pressCount = i + 1;
      if (pressCount < charMinPress[idx]) {
        charMinPress[idx] = pressCount;
      }
    }
  }

  // 2. targets를 순회하며 최소 누름 횟수 합산
  return targets.map((target) => {
    let total = 0;
    for (let i = 0; i < target.length; i++) {
      const idx = target.charCodeAt(i) - 65;
      if (charMinPress[idx] === Infinity) {
        return -1; // 만들 수 없는 문자 포함된 경우
      }
      total += charMinPress[idx];
    }

    return total;
  });
}

// console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
console.log(solution(['AA'], ['B']));
console.log(solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']));
