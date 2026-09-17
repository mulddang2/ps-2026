/** NOTE:
 * [x] 구조분해로 두 줄 쓰는 대신 한 줄로 묶기
 * [x] concat -> 스프레드/flatMap 고려
 */
function solution(arr, intervals) {
  // 1. 스프레드
  // const [[s1, e1], [s2, e2]] = intervals;
  //   return [...arr.slice(s1, e1 + 1), ...arr.slice(s2, e2 + 1)];
  // 2. flatMap 사용
  return intervals.flatMap(([start, end]) => arr.slice(start, end + 1));
}

console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ],
  ),
);
