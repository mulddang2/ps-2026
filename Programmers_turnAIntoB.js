function solution(before, after) {
  // 두 문자열이 순서만 다르고 동일한 종류와 갯수의 문자가 있는지
  // sort 활용
  const beforeSort = [...before].sort().join('');
  const afterSort = [...after].sort().join('');

  return beforeSort === afterSort;
}

console.log(solution('olleh', 'hello'));
console.log(solution('care', 'race'));
// console.log(solution('allpe', 'apple'));
