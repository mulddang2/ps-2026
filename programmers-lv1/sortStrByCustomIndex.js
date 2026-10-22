function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] !== b[n]) {
      // 1. n번째 글자가 다를때 정렬 기준
      return a[n].localeCompare(b[n]);
    } else {
      // 2. n번째 글자가 같을 때 (중복)일 때, 정렬기준
      return a.localeCompare(b);
    }
  });
}

// console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));
