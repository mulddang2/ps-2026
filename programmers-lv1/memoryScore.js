/** NOTE:
 * [x] 매번 indexOf 중복 사용으로 시간복잡도 불필요하게 증가 --> 해시 맵이나 객체 활용해보기
 */
function solution(name, yearning, photo) {
  // 1. 이름과 점수를 1:1로 매핑하는 맵 생성
  const yearningMap = new Map();
  for (let i = 0; i < name.length; i++) {
    yearningMap.set(name[i], yearning[i]);
  }

  // 2. 각 사진을 순회하며 점수 합산
  return photo.map((p) =>
    p.reduce((acc, cur) => acc + (yearningMap.get(cur) || 0), 0),
  );
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ],
  ),
);
console.log(
  solution(
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ],
  ),
);
console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']],
  ),
);
