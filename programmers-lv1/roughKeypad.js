function solution(keymap, targets) {
  // 문자를 키로 하고, 그 문자의 최소 누름 횟수를 값으로 저장한다.
  const keyCountMap = new Map();
  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      if (keyCountMap.has(keymap[i][j])) {
        keyCountMap.set(
          keymap[i][j],
          Math.min(j + 1, keyCountMap.get(keymap[i][j])),
        );
      } else {
        keyCountMap.set(keymap[i][j], j + 1);
      }
    }
  }
  const result = new Array(targets.length);
  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    for (let j = 0; j < targets[i].length; j++) {
      if (!keyCountMap.has(targets[i][j])) {
        count = -1;
        break;
      } else {
        count += keyCountMap.get(targets[i][j]);
      }
    }
    result[i] = count;
  }
  return result;
}

// console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
console.log(solution(['AA'], ['B']));
console.log(solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']));
